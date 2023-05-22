# Amazonia Drones API

Welcome to the README of the Amazonia Drones back-end application, built with Node.js and Express.js. This document provides basic technical information about the project's functionality.

## Table of Contents

- [Getting Started](#getting-started)
- [Migrations](#migrations)
- [Unit Tests](#unit-tests)
- [Docker](#docker)
- [API Documentation](#api-documentation)
- [Dijkstras Algorithm](#dijkstras-algorithm)

## Getting Started

To update the dependencies, use the following command:

```bash
  yarn
````

To start the project, use the following command:

```bash
  yarn start
````

## Migrations

Running migrations:

```bash
  yarn mrun
````
Creating a new migration:
```bash
  yarn mcreate <migration-name>
````
Reverting the last executed migration:
```bash
  yarn mrevert
````

## Unit Tests

To run the tests, use the following command:

```bash
yarn test
````
## Docker

### Building an Image and Creating a Container

1. Building the Docker image:
```bash
docker build -t image-name .
````
2. Creating a container from the image:
```bash
docker run -p 3000:3000 --name container-name image-name
````
### Using Docker Compose

To start the application using Docker Compose, execute the following command:
```bash
docker-compose -f docker-compose.prod.yml up -d
````
## API Documentation

The API documentation can be found at the following link:

[API Documentation with Swagger](https://teste-0sg8.onrender.com/api-docs)

## Dijkstra's Algorithm

The application uses Dijkstra's algorithm to find the fastest route. Dijkstra's algorithm is widely used in optimization problems, such as finding the shortest path on a map. It calculates the shortest distance between two points in a weighted graph. The logic of the algorithm is based on finding the path with the lowest accumulated cost between the vertices of the graph, updating the costs as new paths are explored.
