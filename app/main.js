const inputComponent = {
  template: `<input class="input is-small" type="text" />`
}

new Vue({
  el: '#app',
  components: {
    'input-component': inputComponent
  },
  data:{
    notes:[],
    timestamps:[],
    placeholder: 'Enter a note'
  },
})
