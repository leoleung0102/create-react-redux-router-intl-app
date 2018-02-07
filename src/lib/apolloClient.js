import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import  canUseDOM  from 'fbjs/lib/ExecutionEnvironment';

const httpLink = createHttpLink({
    uri: `http://localhost:3001/graphql`,
    header: {'Content-type': "application/json"},
});
const authMiddleware = setContext(() => ({
    headers: {
        authorization: (canUseDOM && typeof localStorage !== undefined) ?
            localStorage.getItem('jwtToken') ? `JWT ${localStorage.getItem('jwtToken')}` : null : null
    }
}));

const errorLink = onError(({ networkError, graphQLErrors }) => {
    let callBackMessage;
    if (networkError.statusCode === 401 || networkError.statusCode === 403) {
        networkError.json().then(function(data) {
            callBackMessage = data;
            if(true){
                console.log(callBackMessage);
            }
        });
    }
});

const client = new ApolloClient({
    link: from([
        authMiddleware,
        errorLink,
        httpLink
    ]),
    cache: new InMemoryCache(),
});


export default client;