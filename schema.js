// schema.js
export const typeDefs = `#graphql
  type Game {
    id:ID!,
    title: String!,
    platform: [String!]!
  }
  type Review {
    id:ID!,
    rating: Int!,
    content: String!
  }
  type Author {
    id:ID!,   
    name: String!,
    verified: Boolean!
  }
  type Query {  
    games: [Game],
    reviews: [Review],
    authors: [Author]
  }
  type Mutation {
    createGame(title: String!, platform: [String!]!): Game
    createReview(rating: Int!, content: String!): Review
    createAuthor(name: String!, verfied: Boolean!): Author
  }`;
