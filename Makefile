build:
	yarn build

deploy-dev: build
	tsuru app-deploy public -a opensource-dev

deploy-prod: build
	tsuru app-deploy public -a opensource