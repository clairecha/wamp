<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Connexion interface</h1>
      <p class="lead">
        Below the formulary for sign-up or signe-in in your magnificient
        application !
      </p>
      <hr class="my-4" />
      <FormHandler />
    </div>
  </div>
</template>

<script>
import FormHandler from './FormHandler';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
  components: {
    FormHandler,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
