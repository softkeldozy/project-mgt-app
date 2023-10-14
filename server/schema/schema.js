const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLList } = require('graphql');
// ! Mongoose models for querying the database
const Project = require('../models/project');
const Client = require('../models/Client');

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
        return Client.findById(parent.clientId);
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
        return Project.find(); //! returning everything from project
      }
    },
    // 
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      // *our return where ever we want to respond with
      resolve(parent, args) {
        return Project.findById(args.id);
      }
    },
    // Query to get all Clients
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      }
    },
    // 
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      // *our return where ever we want to respond with
      resolve(parent, args) {
        return Clients.findById(args.id);
      }
    }
  }
});
//* Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a Client 
    addClient: {
      type: ClientType,
      args: {
        // ? Using GraphQLNonNull to make sure an empty string isn't submitted
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      // This is what you get back from your query 
      resolve(parent, args) {
        // * Here a new client is being created using the mongoose model, passing in properties and key values which will be coming from our GraphQL query (ultimately front-end form input elements) 
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client.save(); //! here we are saving the new client to the dB....the CLient.create() could also be used in place of this
      },
    },
    // Delete a client
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id);
      }
    },
    // TODO add support function for Updating client here
    // Add Project
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatus',
            values: {
              'new': { value: 'Not Started' },
              'progress': { value: 'In Progress' },
              'completed': { value: 'Completed' },
            },
          }),
          defaultValue: 'Not Started',
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      //! Same as with our client creation 
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });
        return project.save();
      },
    },
    // Delete a Project
    deleteProject: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndRemove(args.id);
      },
    },
    // Update Project
    updateProject: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatusUpdate',
            values: {
              'new': { value: 'Not Started' },
              'progress': { value: 'In Progress' },
              'completed': { value: 'Completed' },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id, {
          $set: {
            name: args.name,
            description: args.description,
            status: args.status,
          },
        },
          //* If its not there a new project will be created
          { new: true }
        );
      },
    },
  },
});
module.exports = new GraphQLSchema({ query: RootQuery, mutation })