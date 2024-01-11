<template>
    <div class="jumbotron">
      <h2>Formulario</h2>
      <hr />
      <hr />
  
      <vue-form :state="formState" @submit.prevent="enviar()">
  
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
          <label for="descripcion">Descripcion</label>
          <input
            type="text"
            id="descripcion"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.descripcion"
            name="descripcion"
            required
          />
  
          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
          </field-messages>
        </validate>
  
        <br />
  
        <validate tag="div">
          <label for="importe">Importe</label>
          <input
            type="number"
            id="importe"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.importe"
            name="importe"
            required
            :min="importeMin"
          />
          
          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              Debe ingresar un importe mayor a {{ importeMin - 1 }}
            </div>
          </field-messages>
        </validate>
  
        <br />
  
        <button class="btn btn-outline-dark my-3" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>
      <Presupuesto @presupuesto="presupuesto=$event"></Presupuesto>
      <Tabla :personas="personas" :total="total" :colorTotal="colorTotal"/>
  
    </div>
  </template>
  
  <script>
  import Tabla from "./Tabla.vue";
  import Presupuesto from "./Presupuesto.vue";
  export default {
    name: "src-componentes-formulario",
    components: {
      Tabla,
      Presupuesto
    },
    data () {
        return {
          formState : {},
          formData: this.getInitialData(),
          nombreMinLength: 5,
          nombreMaxLength: 15,
          importeMin: 1,
          personas: [],
          total: 0,
          colorTotal: {
            color: 'black'
          }
        }
      },
    methods: {
        getInitialData() {
          return {
            nombre: null,
            descripcion: null,
            importe: null,
          }
      },
      enviar() {
        let persona = {...this.formData}
        var d = new Date
        let dformat = [d.getDate(),d.getMonth()+1,d.getFullYear()].join('/')+' '+
                      [d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
        persona.fecha = dformat
        this.total+= persona.importe
        this.personas.push(persona)
        this.formData = this.getInitialData()
        this.formState._reset()
        this.cambiarColorTotal()
      },
      cambiarColorTotal(){
          if(this.total < 1000){
            this.colorTotal.color = 'green'
          }
          else if(this.total >= 1000 || this.total <= 5000){
            this.colorTotal.color = 'magenta'
          }
          if(this.total > 5000){
            this.colorTotal.color = 'orange'
          }
      }
    },
    watch: {
      compararPresupuesto(){
        if(this.presupuesto < this.total){
          this.colorTotal.color = 'red'
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>