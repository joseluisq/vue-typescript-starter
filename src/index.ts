import Vue from 'vue'
import App from './components/App.vue'

// mount
new Vue({
  el: '#app',
  render: h =>
    h(App, {
      props: { propMessage: 'World' }
    })
})
