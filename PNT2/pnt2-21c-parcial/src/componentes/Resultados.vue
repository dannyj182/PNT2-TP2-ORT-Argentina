<template>
<div>
  <br>
<div>
    <div v-if="respuestas.length" class="table-responsive">
          <table class="table table-success">
            <tr>
              <th>Número de Pregunta</th>
              <th>Respuesta</th>
            </tr>
            <tr v-for="(r,index) in respuestas" :key="index">
              <td>{{ r.numero }}</td>
              <td>{{ r.respuesta }}</td>
            </tr>
          </table>
        </div>
  </div>
</div>
</template>

<script>

  export default  {
    name: 'src-componentes-resultados',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
          {numero: 1, respuesta: 'b, d'},
          {numero: 2, respuesta: 'c'},
          {numero: 3, respuesta: 'b, e'}
        ]
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
