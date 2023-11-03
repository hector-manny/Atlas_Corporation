<template>
  <div>
    <h2>Tabla de Datos</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
            <button @click="verDetalles(item)">Ver Detalles</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="detalleVisible" class="modal">
      <div class="modal-content">
        <h3>Detalles del Elemento</h3>
        <p><strong>ID:</strong> {{ detalle.id }}</p>
        <p><strong>Nombre:</strong> {{ detalle.nombre }}</p>
        <p><strong>Descripción:</strong> {{ detalle.descripcion }}</p>
        <button @click="cerrarDetalles">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [  // Ejemplo de datos, puedes reemplazarlos con tus propios datos
        { id: 1, nombre: "Elemento 1", descripcion: "Descripción del elemento 1" },
        { id: 2, nombre: "Elemento 2", descripcion: "Descripción del elemento 2" },
        { id: 3, nombre: "Elemento 3", descripcion: "Descripción del elemento 3" },
      ],
      detalleVisible: false,
      detalle: {},
    };
  },
  methods: {
    verDetalles(item) {
      this.detalle = item;
      this.detalleVisible = true;
    },
    cerrarDetalles() {
      this.detalleVisible = false;
    },
  }
};
</script>

<style scoped>
  /* Estilos para el modal (puedes personalizarlos) */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  button {
    cursor: pointer;
  }
</style>
