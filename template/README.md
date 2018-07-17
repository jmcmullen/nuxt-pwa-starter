# {{ name }}

> {{ description }}

## Getting Started

### Setting Environment Variables

All environment variables are loaded from the .env file inside the project root. This file should never be commited to git but you can copy the example to see the variables that need set.

```bash
# set up environment variables
$ cp .env.example .env
```

### Installing Node 8.11.3 (LTS)

Once you have set up the environment variables you should use the correct version of Node. We use 8.11.3 for this project. First install NVM from here: https://github.com/creationix/nvm#installation

Once you've got NVM setup, switch to 8.11.3:

```bash
# install the correct version
$ nvm install

# use the correct version
$ nvm use
```

### Installing NPM Dependencies

Now we're ready to install our node modules. Yarn is recommended.

```bash
# install yarn
$ npm i -g yarn

# install dependencies
$ yarn

# serve with hot reload at localhost:8080
$ yarn dev

# generate static project
$ yarn generate
```
