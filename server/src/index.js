const fs = require("fs");
const path = require("path");
const { ApolloServer } = require("apollo-server");
const { PrismaClient, Prisma } = require("@prisma/client");

const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);

const resolvers = {
  Query: {
    read: (parent, args, context) => {
      return context.prisma.user.findUnique({
        where: {
          id: Number(args.id),
        },
      });
    },
    readAll: (parent, args, context) => {
      return context.prisma.user.findMany();
    },
  },
  Mutation: {
    create: (parent, args, context) => {
      return context.prisma.user.create({
        data: {
          username: args.username,
          fullName: args.fullName,
        },
      });
    },
    update: (parent, args, context) => {
      return context.prisma.user.update({
        where: {
          id: Number(args.id),
        },
        data: {
          username: args.username,
          fullName: args.fullName,
        },
      });
    },
    delete: (parent, args, context) => {
      return context.prisma.user.delete({
        where: {
          id: Number(args.id),
        },
      });
    },
  },
};

const prisma = new PrismaClient();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
