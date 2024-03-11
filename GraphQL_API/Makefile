# Makefile for Docker

# Variables
DOCKER_IMAGE_NAME = graphql_api
DOCKER_CONTAINER_NAME = graphql_api_container
HOST_DIRECTORY=./
CONTAINER_DIRECTORY=/GraphQL_API
.PHONY: build run exec stop clean

# Build the Docker image
build:
	docker build -t $(DOCKER_IMAGE_NAME) .

# Run the Docker container with directory binding
run:
	docker run -d -p 4000:4000 --name $(DOCKER_CONTAINER_NAME) -v ${HOST_DIRECTORY}:${CONTAINER_DIRECTORY} ${DOCKER_IMAGE_NAME}

# Execute a command inside the Docker container
exec:
	docker exec -it $(DOCKER_CONTAINER_NAME) bash

# Stop and remove the Docker container
stop:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

# Clean up Docker images and containers
clean:
	docker stop $(DOCKER_CONTAINER_NAME) || true
	docker rm $(DOCKER_CONTAINER_NAME) || true
	docker rmi $(DOCKER_IMAGE_NAME) || true