<template>

  <div>
    <div v-if="personas.length" class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Importe</th>
              <th>Fecha</th>
            </tr>
            <tr v-for="(persona,index) in personas" :key="index">
              <td>{{ persona.nombre }}</td>
              <td>{{ persona.descripcion }}</td>
              <td>{{ `$${persona.importe}` }}</td>
              <td>{{ persona.fecha }}</td>
            </tr>
          </table>
        </div>
        <h4 v-else class="alert alert-danger text-center">Acá se visualizan las deudas que agregues</h4>
        <div v-show="personas.length" :style="colorTotal"> Gasto Total: {{ total }}</div>
  </div>

</template>

<script>

  export default  {
    name: 'src-componentes-tabla',
    props: ['personas', 'total', 'colorTotal'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
