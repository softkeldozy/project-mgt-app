const { projects, clients } = require('../sampleData.js');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

//* CLient Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString }
  }),
});

//* Project Type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    // Getting the Client associated to a project
    client: {
      type: ClientType,
      resolve(parent, args) {
        return clients.find(client => client.id === parent.clientId);
      }
    }
  }),
});

// !Getting a CLient by the ID
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Query to get all Projects
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return projects;
      }
    },
    // 
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      // *our return where ever we want to respond with
      resolve(parent, args) {
        return projects.find(project => project.id === args.id);
      }
    },
    // Query to get all Clients
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return clients;
      }
    },
    // 
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      // *our return where ever we want to respond with
      resolve(parent, args) {
        return clients.find(client => client.id === args.id);
      }
    }
  }
});
module.exports = new GraphQLSchema({ query: RootQuery })