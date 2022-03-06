import './App.css';
import 'antd/dist/antd.css';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import GetAllJobs from './Components/GetAllJobs';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
  uri: 'https://api.graphql.jobs',
  }),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <GetAllJobs />
      </ApolloProvider>
    </div>
  );
}

export default App;
