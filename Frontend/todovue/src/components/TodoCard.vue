<template>
  <div id="todoCard">
    <div v-if="!editing">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.context }}</p>
        <button @click="togleEdit">Edit</button>
        <button @click="onDelete">Delete</button>
    </div>
    
    
    <form v-if="editing" @submit.prevent="submitEdit">
        <label>
            title
            <input type="text" id="title" v-model="editTitle">
        </label>
        <label>
            context
            <input type="text" id="context" v-model="editContext">
        </label>
        <button type="submit">Submit</button>
    </form>
    
  </div>
</template>

<script>

export default {
  name: 'TodoCard',

  data(){
    return{
      editing: false,
      editTitle: '',
      editContext: ''
    }
  },

  props: {
    todo: {
        type: Object
    }
  },

  methods: {
    togleEdit(){
        this.editing = !this.editing;
        if (this.editing) {
          this.editTitle = this.todo.title;
          this.editContext = this.todo.context;
        }
    },
    submitEdit(){
        this.$emit('update', {
          ...this.todo,
          title: this.editTitle,
          context: this.editContext
        });
        this.editing = false;
    },
    onDelete(){
        this.$emit('delete', this.todo.id);
    },
    ondelete(){
        this.$emit('delete', this.todo.id);
    }
  },

  mounted(){
  }
}
</script>

<style>

</style>