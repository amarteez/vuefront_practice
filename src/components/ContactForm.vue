<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <AutoComplete 
          v-model="formData.name" 
          :suggestions="items" 
          @complete="search" 
          :invalid="formData.name === ''" 
          placeholder="Name" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <InputText 
          type="email" 
          v-model="formData.email" 
          placeholder="Email" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea 
          v-model="formData.message" 
          placeholder="Message" 
          required
        ></textarea>
      </div>
      <Button type="submit" label="Submit" />
    </form>

    <!-- Botón para redirigir a la página de datos -->
    <router-link to="/data"> <!-- Utilizar router-link para la navegación -->
      <Button label="View Submitted Data" class="view-data-btn" />
    </router-link>

    <!-- Modal -->
    <Dialog :visible="modalVisible" modal @hide="modalVisible = false">
      <template #header>
        <h3>Form Data</h3>
      </template>
      <p><strong>Name:</strong> {{ formData.name }}</p>
      <p><strong>Email:</strong> {{ formData.email }}</p>
      <p><strong>Message:</strong> {{ formData.message }}</p>
      <template #footer>
        <Button label="Close" @click="modalVisible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const formData = ref({
  name: '',
  email: '',
  message: ''
});
const modalVisible = ref(false);
const items = ref([]);

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
};

const handleSubmit = () => {
  modalVisible.value = true; // Muestra el modal al enviar
  // Aquí puedes agregar lógica para enviar los datos al backend si lo necesitas.
};
</script>



<style scoped>
/* Aquí puedes mantener tus estilos originales o modificarlos según sea necesario */
.contact-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Estilos para el botón de ver datos */
.view-data-btn {
  margin-top: 1rem;
  background-color: #28a745;
}

.view-data-btn:hover {
  background-color: #218838;
}

/* Estilos del modal */
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
