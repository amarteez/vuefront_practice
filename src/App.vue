<template>
  <div id="app">
    <router-view /> <!-- Esto permite que el router renderice los componentes -->
  </div>
</template>

<script>
export default {
  name: 'App'
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
    background-color: #b2f0ff;
}
</style>
