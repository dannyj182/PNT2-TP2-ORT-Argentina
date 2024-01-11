<template>

  <div>
    <Header></Header>
		<div id="navigator">
			<button id="reset" @click="restartButton()">{{restartText}}</button>
			<span id="message"> {{messageDisplay}}</span>
			<button id="easy" @click="easyButton()" :class="easyClass" >easy</button>
			<button id="hard" @click="hardButton()" :class="hardClass" >hard</button>
		</div>
		<Container
      @restart-text="restartText=$event"
      @message-display="messageDisplay=$event">
    </Container>
	</div>

</template>

<script>

import Header from './Header.vue'
import Container from './Container.vue'

  export default  {
    name: 'src-components-navigator',
    components: {
      Header,
      Container
    },
    data () {
      return {
        isHard : true,
        easyClass : '',
        hardClass : 'selected',
        messageDisplay : '',
        colorMessage : '',
        restartText : 'New Colors!'
      }
    },
    methods: {
      restartButton(){
        this.restart()
      },
      easyButton(){
        if(this.isHard){
          this.isHard = false
          this.easyClass = 'selected'
          this.hardClass = ''
          this.$store.dispatch('setColorCount', 3)
          this.$store.dispatch('setDisplayNone')
          this.restart()
        }
      },
      hardButton(){
        if(!this.isHard){
          this.isHard = true
          this.easyClass = ''
          this.hardClass = 'selected'
          this.$store.dispatch('setColorCount', 6)
          this.restart()
          this.$store.dispatch('setDisplayBlock')
        }
      },
      restart(){
        this.$store.dispatch('createNewColors')
        this.$store.dispatch('setColorDisplay', this.pickColor())
        this.$store.dispatch('setHeaderBackgroundColor', 'steelblue')
        this.messageDisplay = ''
        this.restartText = 'New Colors!'
        this.$store.dispatch('setBackgroundColor')
      },
      pickColor() {
        let quantity;
        if (this.isHard) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity);
      },
    },
    mounted () {
      this.$store.dispatch('createNewColors')
      this.$store.dispatch('inicializarSquares')
      this.$store.dispatch('setColorDisplay', this.pickColor())
    },
  }

</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
  color: #000000;
  display: inline-block;
  width: 20%;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
</style>