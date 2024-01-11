<template>
  <section>
    <div class="jumbotron">
      <h2>Cliente Http</h2>
      <hr />
      <hr />

      <button
        class="btn btn-outline-secondary my-3 mr-3"
        @click="getUsuariosXHR()"
      >
        Pedir con XHR
      </button>
      <button
        class="btn btn-outline-info my-3 mr-3"
        @click="getUsuariosFetch()"
      >
        Pedir con Fetch
      </button>
      <button
        class="btn btn-outline-primary my-3 mr-3"
        @click="getUsuariosAxios()"
      >
        Pedir con Axios
      </button>

      <button class="btn btn-outline-danger my-3 mr-3" @click="usuarios = []">
        Clear
      </button>
      <br />

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>email</th>
            <th>telefono</th>
          </tr>

          <tr v-for="usuarios in usuarios" :key="usuarios.id">
            <td>{{ usuarios.id }}</td>
            <td>{{ usuarios.nombre }}</td>
            <td>{{ usuarios.email }}</td>
            <td>{{ usuarios.telefono }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">
        Haz clic en uno de los botones para empezar
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-http-client",
  props: [],
  mounted() {},
  data() {
    return {
      url: "https://63534baca9f3f34c37506ab3.mockapi.io/usuarios",
      usuarios: [],
    };
  },
  methods: {
    xhrPromise() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", this.url);
        xhr.addEventListener("load", () => {
          if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response);
            resolve(respuesta);
          } else {
            reject(`Error http: ${xhr.status}`);
          }
        });
        xhr.send();
      });
    },
    async getUsuariosXHR() {
      try {
        this.usuarios = await this.xhrPromise();
      } catch (error) {
        console.log(error);
      }
    },
    async getUsuariosFetch() {
      try {
        let response = await fetch(this.url);
        this.usuarios = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async getUsuariosAxios() {
      try {
        let respuesta = await this.axios(this.url);
        this.usuarios = respuesta.data
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
</style>
