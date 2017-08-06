import Vue from 'vue'
import App from './components/App.vue'

// Apollo Client: Required imports
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from './vue-apollo-plugin'

// Apollo Client: GraphQL Server API configuration
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4020/graphql'
  }),
  ssrForceFetchDelay: 100,
  connectToDevTools: true
})

// Apollo Client: Expose the Apollo Client into Vue components
Vue.use(VueApollo, {
  apolloClient: apolloClient
})

new Vue({
  el: '#app',
  render: h => h(App)
})
