import Vue from 'vue'
import App from './components/App.vue'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from './vue-apollo'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4020/graphql'
  }),
  ssrForceFetchDelay: 100,
  connectToDevTools: true
})

Vue.use(VueApollo, {
  apolloClient: apolloClient
})

new Vue({
  el: '#app',
  render: h =>
    h(App)
})
