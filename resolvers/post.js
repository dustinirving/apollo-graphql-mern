const { Post } = require("../models");

module.exports = {
  Query: {
    posts: async () => await Post.find(),
  },
  Mutation: {
    createPost: async (root, args, { req, res }, info) => {
      const post = await Post.create(args);
      return post;
    },
  },
};
