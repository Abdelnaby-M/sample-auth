default: start

dev:
	_scripts/start-db.sh && npm run start:dev

start:
	_scripts/start.sh

build:
	npm run build

build-ui:
	_scripts/build-ui.sh

build-all:
	_scripts/build-ui.sh && npm i && npm run build

start-db:
	_scripts/start-db.sh

stop-db:
	_scripts/stop-db.sh