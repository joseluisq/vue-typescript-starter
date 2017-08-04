<template>
  <div>

    <div class="columns is-mobile">
      <div class="column">

        <h3 class="title">Latest posts</h3>

        <table class="table is-bordered is-striped is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>Code</th>
              <th>Title</th>
              <th>Votes</th>
              <th>Author</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="posts" v-for="post in posts">
              <td>{{shortCode(post.id)}}</td>
              <td>{{post.title}}</td>
              <td class="has-text-right">{{post.votes}}</td>
              <td>{{post.author.firstName}} {{post.author.lastName}}</td>
              <td>{{formatDate(post.createdAt)}}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import format from 'date-fns/format'
import q from './queries'

@Component({})
export default class App extends Vue {
  $apollo: any
  posts: any

  data() {
    return {
      posts: []
    }
  }

  mounted() {
    // Get posts
    this.$apollo
      .query({ query: q.posts })
      .then(({ data }) => {
        if (data && data.posts) {
          this.posts = data.posts
        }
      })
      .catch(error => console.error())
  }

  shortCode(code: string = '') {
    return code.substr(0, 8)
  }

  formatDate(date: string) {
    return format(date, 'DD/MM/YYYY HH:mm:ss')
  }
}
</script>
<style lang="sass">
  @import "../../node_modules/bulma/bulma"

  body
    padding: 2em

</style>
