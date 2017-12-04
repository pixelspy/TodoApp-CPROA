<template lang="html">
  <div class="" >
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="category in categories">{{ category.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="todo in todos">{{ todo.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
let urlApi = 'http://localhost:3000/categories'
let urlApiTodos = 'http://localhost:3000/user/'
let todo = '/todos'
export default {
  data() {
    return {
      categories : [],
      todos : [],
      routeId: this.$route.params.id
    }
  },
  methods : {
    getCategories () {
      this.axios.get(urlApi).then(response => {
        console.log(response.data)
        this.categories = response.data
      })
    },
    getTodos () {
      let urlfinalTodos = urlApiTodos + this.routeId + todo
      console.log(urlfinalTodos)
      this.axios.get(urlfinalTodos).then(response => {
        console.log(response.data)
        this.todos = response.data
      })
    }

  },
  created () { //instance de vie : life cycle hooks
    console.log('created')
    this.getCategories()
    this.getTodos()
  }
}
</script>

<style lang="css">
</style>
