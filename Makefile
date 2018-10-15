.PHONY: setup start build deploy

setup:
	yarn install

start:
	yarn develop

build:
	yarn build

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
