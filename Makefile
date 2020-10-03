NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

.SILENT:
.DEFAULT_GOAL=help

COLOR_RESET = \033[0m
COLOR_GREEN = \033[32m
COLOR_YELLOW = \033[33m

PROJECT_NAME = `basename $(PWD)`

## print help
help:
	printf "${COLOR_YELLOW}\n${PROJECT_NAME}\n\n${COLOR_RESET}"
	awk '/^[a-zA-Z\-\_0-9\.%]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "${COLOR_GREEN}$$ make %s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	printf "\n"

## install project dependencies
setup:
	@${PKG_MANAGER} install
	make setup-dev

## start development server
start:
	@${PKG_MANAGER} run start

## SETUP DEV
setup-dev:
	export NODE_ENV=development
	cp .env.example .env.development
	echo "DEV SETUP DONE"

## build static files to production
build:
	@${PKG_MANAGER} run build


build-dev:
	@${PKG_MANAGER} run build:dev


## deploy to production
deploy:	build
	tsuru app-deploy public -a opensource-web

## deploy to development
deploy-dev:	build-dev
	tsuru app-deploy public -a opensource-web-dev

## clean docker-compose images
docker-clean:
	docker-compose --project-name ${PROJECT_NAME} rm -f

## start development with docker-compose
docker-start: docker-clean
	docker-compose --project-name ${PROJECT_NAME} up -d --remove-orphans

## build docker-compose images
docker-build: docker-clean
	docker-compose --project-name ${PROJECT_NAME} pull
	docker-compose --project-name ${PROJECT_NAME} build

## stop docker-compose
docker-stop: docker-clean
	docker-compose --project-name ${PROJECT_NAME} stop
