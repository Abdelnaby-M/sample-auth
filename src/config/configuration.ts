export default () => ({
    port: process.env.PORT || 3000,
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/sample-auth',
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
        accessTokenValidPeriod: process.env.TOKEN_EXPIRY ||'15m',
    },
  });
  