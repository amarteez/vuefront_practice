<template>
  <div id="app">
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';

export default {
  components: {
    ContactForm
  }
};
</script>

<style>
/* Estilos globales */
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
