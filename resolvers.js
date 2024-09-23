// resolvers.js
import db from './_db.js'

export const resolvers = {
  Query: {
    games: () => db.games,
    reviews: () => db.reviews,
    authors: () => db.authors
  }
}