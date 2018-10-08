.PHONY: setup start build deploy

setup:
	yarn install

start:
	yarn develop

build:
	yarn build

deploy: build
	tsuru app-deploy public -a opensource-web