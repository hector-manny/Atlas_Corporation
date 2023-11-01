<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aquí puedes agregar la lógica de autenticación, por ejemplo, enviar una solicitud a un servidor
        // y verificar las credenciales del usuario.
        // Si las credenciales son válidas, redirige al usuario a la página principal.
      }
    }
  };
  </script>
  