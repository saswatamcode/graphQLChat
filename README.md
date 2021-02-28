[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
[![GitHub forks](https://img.shields.io/github/forks/saswatamcode/graphQLChat?style=social)](https://GitHub.com/saswatamcode/graphQLChat/network/)
[![GitHub stars](https://img.shields.io/github/stars/saswatamcode/graphQLChat?style=social)](https://GitHub.com/saswatamcode/graphQLChat/stargazers/)
[![GitHub issues](https://img.shields.io/github/issues/saswatamcode/graphQLChat.svg)](https://GitHub.com/saswatamcode/graphQLChat/issues/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# GraphQL Live Chat App
A simple live GraphQL chat app built using React, Node, Apollo Server/Client and TypeGraphQL. Built for dev.to article series!

## To Run
### Server
- Run `yarn` to install deps
- Make `.env` file with `PORT=9000`
- Run `yarn watch` to compile TS files
- In another terminal, run `yarn dev`
- Visit `localhost:9000/graphql` to view GraphQL Playground

### Client
- Run `yarn` to install deps
- Run `yarn start`
- Visit `localhost:3000`

## GraphQL API Endpoints
- `/graphql`: has `createChat` mutation and `allChats` query resolvers
- `/subscriptions`: has `messageSent` subscription

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)