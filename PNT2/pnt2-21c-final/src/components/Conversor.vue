<template>

  <div>
    <h1>Conversor de Temperatura</h1>
    <hr>
    <form >
        <div>
          <label for="monto">Ingrese Temperatura °C </label>
          <input 
            type="number" 
            id="temperatura" 
            class="form-control" 
            v-model.trim="formData.temperatura" 
            name="temperatura"
          >
       </div>
      </form>
      <br>
      <div>Conv Temperatura °F: <span :style="cambiarColor">{{ convertirF }}</span></div>
      <br>
      <div>Conv Temperatura °K: <span :style="cambiarColor">{{ convertirK }}</span></div>

      <div>
        <p>Respuestas: 1C, 2B, 3C, 4A, 5BC</p>
     </div>
     <div>
        <h2>Danny Jiménez 21C</h2>
     </div>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-conversor',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData: this.getInitialData(),
      }
    },
    methods: {
      getInitialData() {
              return {
                temperatura: null,
              }
            }
    },
    computed: {
      convertirF(){
        let fahrenheit = null
        if(this.formData.temperatura != null){
          fahrenheit = ( this.formData.temperatura * 1.8 ) + 32
        }
        return fahrenheit
      },
      convertirK(){
        let kelvin = null
        if(this.formData.temperatura != null){
          kelvin = parseInt( this.formData.temperatura ) + 273.15
        }
        if(isNaN(kelvin)){
          kelvin = null
        }
        return kelvin
      },
      cambiarColor(){
        let style = {
          color: 'black'
        }
        let temperatura = parseInt(this.formData.temperatura)
        if(temperatura <= 0){
          style.color = 'blue'
        }else if(temperatura > 0 && temperatura < 15){
          style.color = 'magenta'
        }else if(temperatura >= 15){
          style.color = 'red'
        }
        return style
      }
    }
}
</script>

<style scoped lang="css">

</style>
