<template>
  <div>
    <div class="login-container">
      <div class="login-image">
        <img src="../assets/atlas.png" alt="Login">
        <img src="../assets/atlascorp.png" alt="Login">
      </div>
      <div class="login-form">
        <h2>Iniciar sesión</h2>
        <form @submit.prevent="">
          <div class="form-group">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password"  required>
          </div>
          <div class="form-group">
            <a href="/reset-password">¿Olvidaste tu contraseña?</a>
          </div>
          <div class="form-group">
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #041366;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-image {
  padding: 20px;
  flex: 1; /* Añadimos esta propiedad para que la imagen ocupe todo el espacio disponible */
}

.login-image img {
  max-width: 100%;
  height: auto;
}

.login-form {
  flex: 2; /* Añadimos esta propiedad para que el formulario ocupe más espacio que la imagen */
}

.login-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 10px;
  display: block;
  font-weight: bold;
}

input {
  width: 90%;
  padding: 10px;
  border: 1px solid #ffefef;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #771605;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
a{
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
}
</style>
