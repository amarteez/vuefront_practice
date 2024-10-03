<template>
  <div id="app">
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'; // Importa el componente

export default {
  components: {
    ContactForm // Declara el componente para usarlo en el template
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
