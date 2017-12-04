<template lang="html">
<div class=""  >
  <ul v-for="user in users">
    <router-link
    :to="'/user/' + user.id"
    tag="li"
    active-class="active">
    <button type="button" name="button" class="btn btn-primary">{{ user.prenom }} {{ user.nom }}</button>
  </router-link>
  </ul>
</div>
</template>
<script>

  let urlApi = 'http://localhost:3000/users'
  export default {
    data() {
      return {
        users : []
      }
    },
    methods : {
      getUsers () {
        this.axios.get(urlApi).then(response => {
          console.log(response.data)
          this.users = response.data
        })
      }
    },
    created () { //instance de vie : life cycle hooks
      console.log('created')
      this.getUsers()
    }
  }
</script>
<style></style>
