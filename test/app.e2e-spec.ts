import {
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

describe('App e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Auth', () => {
    const signupDto: CreateUserDto = {
      name: 'Jane',
      email: 'jane_doe4@gmail.com',
      password: '123456@a',
    };

    const signinDto = {
      email: signupDto.email,
      password: signupDto.password,
    };

    describe('POST /auth/signup', () => {
      it('should throw if name is too short', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            name: 'Jo',
            email: signupDto.email,
            password: signupDto.password,
          })
          .expectStatus(400);
      });

      it('should throw if email is missing', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            name: signupDto.name,
            password: signupDto.password,
          })
          .expectStatus(400);
      });

      it('should throw if password is missing', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            name: signupDto.name,
            email: signupDto.email,
          })
          .expectStatus(400);
      });

      it('should signup successfully', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(signupDto)
          .expectStatus(201)
          // .expectBodyContains(signupDto.email);
      });
    });

    describe('POST /auth/signin', () => {
      it('should throw if email is missing', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            password: signinDto.password,
          })
          .expectStatus(400);
      });

      it('should throw if password is missing', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: signinDto.email,
          })
          .expectStatus(400);
      });

      it('should signin successfully', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(signinDto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
      });
    });

    describe('GET /user/me', () => {
      it('should get current user details', () => {
        return pactum
          .spec()
          .get('/user/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains(signupDto.email);
      });
    });
  });
});
