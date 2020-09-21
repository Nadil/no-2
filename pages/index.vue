<template>
  <div class="container">
    <div>
      <b-col>
        <b-form-input
          v-model="text"
          placeholder="Enter your name"
          class="mb-4"
        />
      </b-col>
      <b-col>
        <h1 class="title mb-4">Output: {{ text }}</h1>
      </b-col>
      <b-col>
        <button v-on:click="reverse">Reverse</button>
        <button v-on:click="undoRedo">Undo/Redo</button>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      text: '',
    }
  },
  methods: {
    reverse() {
      this.text = this.text.split('').reverse().join('')
    },
    undoRedo() {
      this.text = this.text.split('').reverse().join('')
    },
  },
}
</script>

<style>
body {
  background: #35495e;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 42px;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
