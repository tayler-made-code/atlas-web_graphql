# Resources

### Read or watch:

- [GraphQL](https://graphql.org/)

- [GraphQL: Schemas and Types](https://graphql.org/learn/schema/)

- [GraphQL: Queries and Mutations](https://graphql.org/learn/queries/)

- [Mongoose](https://mongoosejs.com/docs/)

- [Apollo-boost](https://www.npmjs.com/package/apollo-boost)

- [Apollo Client (React)](https://www.apollographql.com/docs/react/)


# Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What GraphQL means
- What is Graphiql
- How to test queries using Graphiql
- What is Apollo
- How to connect to mongoDB
- How to make queries from React
- How to make GraphQL server accept request from another server


# Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension


# Setup

## Install NodeJS
(in your home directory)

```sh
sudo apt install nodejs 
```

```sh
$ node -v
v12.x.x
$ npm -v
...
```

## Setup Express and GraphQL
In your folder <b>server</b> of GraphQL server
- Add package.json using nmp init
  - Install Express in the directory and save it in the dependencies list using: <b>npm install express --save</b>
  - Set up GraphQL using: <b>npm install graphql express-graphql</b>

  ## Setup Apollo
  ```sh
  npm i apollo-boost graphql react-apollo --save
  ```
