.SILENT:
.DEFAULT_GOAL=help

COLOR_RESET = \033[0m
COLOR_GREEN = \033[32m
COLOR_YELLOW = \033[33m

PROJECT_NAME = `basename $(PWD)`

## prints this help
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

## installs project dependencies
setup:
	yarn install

## starts development server
start:
	yarn develop

## builds static files to production
build:
	yarn build

## deploys the app
deploy: build
	tsuru app-deploy public -a opensource-web

docker-clean:
	docker-compose --project-name opensource rm -f

docker-start: docker-clean
	docker-compose --project-name opensource up -d --remove-orphans

docker-build: docker-clean
	docker-compose --project-name opensource pull
	docker-compose --project-name opensource build

docker-stop: docker-clean
	docker-compose --project-name opensource stop
