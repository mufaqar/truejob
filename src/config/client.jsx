import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: "https://truejob.designercrunch.net/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
