import { ApolloClient } from 'apollo-client'
import Vue, { PluginObject, PluginFunction } from 'vue'

// export const addGraphQLSubscriptions: {}

interface Options {
  apolloClient: ApolloClient
}

class VueApollo implements PluginObject<{}> {
  [key: string]: any
  install: PluginFunction<{}>
  _apollo: ApolloClient

  constructor(options: Options) {}

  static install(pVue: typeof Vue, options: Options): void {
    Object.defineProperty(Vue.prototype, '$apollo', {
      get() {
        return this._apollo || options.apolloClient
      }
    })
  }
}

export default VueApollo
