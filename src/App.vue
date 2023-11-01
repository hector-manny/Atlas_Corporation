<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LoginView /> <!-- Agrega el componente LoginForm aquí -->
  </div>
</template>

<script>
import LoginView from './views/LoginView.vue'; // Asegúrate de importar LoginForm

export default {
  name: 'App',
  components: {
    LoginView, // Añade el componente LoginForm aquí
  }
}
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
