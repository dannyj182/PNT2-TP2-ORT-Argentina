<template>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="number" class="form-control" v-model="presupuesto">
</div>

</template>

<script>

  export default  {
    name: 'src-componentes-presupuesto',
    props: [],
    mounted () {
      this.$emit('presupuesto', this.presupuesto)
    },
    data () {
      return {
        presupuesto: 0
      }
    },
    methods: {

    },
    watch: {
      
    }
}

</script>

<style scoped lang="css">

</style>
