import Header from "./components/header/Header";
import Clients from "./components/clients/Clients";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AddClientModal from "./components/addClientModel/AddClientModal";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});


function App() {
  return (
    <>
      <ApolloProvider client={client} >
        <Header />
        <div className="container">
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
