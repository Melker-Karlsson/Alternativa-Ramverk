<template>
  <div id="addTodo">   
    <form @submit.prevent="onAdd">
        <label>
            title
            <input type="text" id="title" v-model="title">
        </label>
        <label>
            context
            <input type="text" id="context" v-model="context">
        </label>
        <button type="submit">AddTodo</button>
    </form> 
  </div>
</template>

<script>

export default {
  name: 'AddTodo',

  data(){
    return{
      title: '',
      context: ''
    }
  },

  methods: {
    onAdd(){
        this.$emit('add', {
            title: this.title,
            context: this.context
        })
    }
  },
}
</script>

<style>

</style>