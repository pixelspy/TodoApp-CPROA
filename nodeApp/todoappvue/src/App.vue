<template>
  <div id="app">
    <h1>Salut</h1>
    <app-home></app-home>
    <hr>
    <app-users class="col-lg-4"></app-users>
    <app-todos class="col-lg-8"></app-todos>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Users from './components/Users.vue'
  import Todos from './components/Todos.vue'

  export default {
    name: 'app',
    components: {
      'appHome' : Home,
      'appUsers' : Users,
      'appTodos' : Todos
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
