setup:
	yarn install

start:
	yarn develop

build:
	yarn build

deploy-dev: build
	tsuru app-deploy public -a opensource-web

deploy-prod: build
	tsuru app-deploy public -a opensource