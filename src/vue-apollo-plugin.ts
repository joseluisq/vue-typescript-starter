/**
 * Vue Apollo Plugin
 * Exposes the "Apollo Client" to use it into Vue components via "$apollo" prop.
 */

import { ApolloClient } from 'apollo-client'
import Vue, { PluginObject, PluginFunction } from 'vue'

interface Options {
  apolloClient: ApolloClient
}

class VueApolloPlugin implements PluginObject<{}> {
  [key: string]: any
  install: PluginFunction<{}>
  _apollo: ApolloClient

  static install(pVue: typeof Vue, options: Options): void {
    Object.defineProperty(Vue.prototype, '$apollo', {
      get() {
        return this._apollo || options.apolloClient
      }
    })
  }
}

export default VueApolloPlugin
