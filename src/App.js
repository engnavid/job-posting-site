import './App.css';
import 'antd/dist/antd.css';

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, from } from '@apollo/client';

import { onError } from '@apollo/client/link/error';
import GetAllJobs from './Components/GetAllJobs';
import SimpleForm from './SimpleForm';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://api.graphql.jobs',
  }),
]);


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: link,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <GetAllJobs />
        {/*<SimpleForm /> */}
      </ApolloProvider>
    </div>
  );
}

export default App;
