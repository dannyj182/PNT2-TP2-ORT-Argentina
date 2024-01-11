import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        squares: [],
        colors: [],
        colorCount: 6,
        colorDisplay: '',
        header : {
            backgroundColor : 'steelblue'
        },
    },
    actions : {
        setDisplayNone({commit}){
            commit('setDisplayNone')
        },
        setDisplayBlock({commit}){
            commit('setDisplayBlock')
        },
        setBackgroundColor({commit}){
            commit('setBackgroundColor')
        },
        inicializarSquares({commit}){
            commit('inicializarSquares')
        },
        createNewColors({commit}){
            commit('createNewColors')
        },
        setAllColorsTo({commit}, color){
            commit('setAllColorsTo', color)
        },
        setColorCount({commit}, number){
            commit('setColorCount', number)
        },
        setColorDisplay({commit}, number){
            commit('setColorDisplay', number)
        },
        setHeaderBackgroundColor({commit}, color){
            commit('setHeaderBackgroundColor', color)
        },
    },
    mutations : {
        setDisplayNone(state){
            for(let i = 0 ; i < 3 ; i++){
                state.squares[i + 3].display = 'none'
            }
        },
        setDisplayBlock(state){
            for(let i = 3 ; i < 6 ; i++){
                state.squares[i].display = 'block'
            }
        },
        setBackgroundColor(state){
            for(let i = 0; i < 6 ; i++){
                state.squares[i].backgroundColor = state.colors[i]
            }
        },
        inicializarSquares(state){
            let array = []
            for(let i = 0 ; i < 6 ; i++){
              let style = {
                display : 'block',
                backgroundColor : state.colors[i]
              }
              array.push(style)
            }
            state.squares = array
        },
        createNewColors(state){
            let array = []
            for (let i = 0 ; i < state.colorCount ; i++){
              array.push(`rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`)
            }
            state.colors = array;
        },
        setAllColorsTo(state, color){
            state.squares.forEach( square => square.backgroundColor = color)
        },
        setColorCount(state, number){
            state.colorCount = number
        },
        setColorDisplay(state, number){
            state.colorDisplay = state.colors[number]
        },
        setHeaderBackgroundColor(state, color){
            state.header.backgroundColor = color
        },
    }
})