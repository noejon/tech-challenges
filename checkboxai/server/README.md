# Task Management Server

## Getting started

### Pre-requisites

#### Nodejs

If you don't have node installed choose your preferred way to install it [here](https://nodejs.org/en/download/package-manager) 

#### pnpm

If you don't have [pnpm](https://pnpm.io/) installed:

```zsh
npm install -g pnpm
```

#### Docker

If Docker is not installed install the [latest desktop version of Docker](https://www.docker.com/products/docker-desktop/)

This will install the Docker cli and `docker-compose`.

### Installation

Clone this project locally and navigate to the `checkboxai/server` folder:

```zsh
git clone git@github.com:noejon/tech-challenges.git
cd tech-challenges/checkboxai/server.git
```

Install all dependencies:

```zsh
pnpm install
```

### Run locally

```zsh
pnpm dev
```

### Run from Docker

```zsh
docker-compose up
```

### Run unit test

```zsh
pnpm test
```
