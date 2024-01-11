<template>
  <div class="jumbotron">
    <h2>Formulario</h2>
    <hr />
    <hr />

    <vue-form :state="formState" @submit.prevent="postPersona()">

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"
          name="nombre"
          required
          :minlength="nombreMinLength"
          nombre-max-length
          no-espacios
        />

        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
          </div>
          <div slot="nombre-max-length" class="alert alert-danger mt-1">
            Este campo debe poseer máximo {{ nombreMaxLength }} caracteres.
          </div>
          <div slot="no-espacios" class="alert alert-danger mt-1">
            Este campo no permite espacios intermedios
          </div>
        </field-messages>
      </validate>

      <br />

      <validate tag="div">
        <label for="edad">Edad</label>
        <input
          type="number"
          id="edad"
          class="form-control"
          autocomplete="off"
          v-model.number="formData.edad"
          name="edad"
          required
          :min="edadMin"
          :max="edadMax"
        />
        
        <field-messages name="edad" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="min" class="alert alert-danger mt-1">
            La edad mínima debe ser {{ edadMin }} años.
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            La edad máxima debe ser {{ edadMax }} años.
          </div>
        </field-messages>
      </validate>

      <br />

      <validate tag="div">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.email"
          name="email"
          required
        />
        
        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="email" class="alert alert-danger mt-1">
            Email no válido
          </div>
        </field-messages>
      </validate>
      <br />

      <button class="btn btn-outline-dark my-3" :disabled="formState.$invalid">
        Enviar
      </button>
    </vue-form>

  </div>
</template>

<script>
export default {
  name: "src-componentes-formulario",
  data () {
    return {
      formState : {},
      formData: this.getInitialData(),
      nombreMinLength: 3,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
    }
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        edad: null,
        email: null
      }
    },
    async postPersona() {
      this.$store.dispatch('postPersona', { ...this.formData } )
      this.limpiarForm()
    },
    limpiarForm() {
      this.formData = this.getInitialData()
      this.formState._reset()
    },
  }
}
</script>

<style scoped> </style>