<template>
  <div id="app">
    <router-view />
    <!-- Footer -->
    <footer>
      <p>© con &hearts; 2023 Atlas Corporation. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fdfdfd;
  margin-top: 60px;
  background: #fcfcff;
}

footer {
  color: #fff;
  margin-top: 3.4%;
  padding: 15px;
  background: #06086e;
}
</style>
