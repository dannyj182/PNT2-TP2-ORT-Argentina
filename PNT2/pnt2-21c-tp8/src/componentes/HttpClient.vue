<template>
  <section>
    <div class="jumbotron">
      <h2>Cliente Http</h2>
      <hr />
      <hr />

      <div v-if="$store.state.personas.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>

          <tr v-for="p in $store.state.personas" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.nombre }}</td>
            <td>{{ p.edad }}</td>
            <td>{{ p.email }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">
        No hay usuarios disponibles
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-http-client",
  mounted() {
    this.$store.dispatch('getPersonas')
  },
}
</script>

<style scoped lang="css"> </style>