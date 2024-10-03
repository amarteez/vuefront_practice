<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="formData.name" placeholder="Name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="formData.email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="formData.message" placeholder="Message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>

    <!-- Modal -->
    <div class="modal" v-if="modalVisible">
      <div class="modal-content">
        <span class="close" @click="modalVisible = false">&times;</span>
        <h3>Form Data</h3>
        <p><strong>Name:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Message:</strong> {{ formData.message }}</p>
        <button @click="modalVisible = false">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      modalVisible: false
    };
  },
  methods: {
    handleSubmit() {
      this.modalVisible = true; // Muestra el modal al enviar
    }
  }
};
</script>

<style scoped>
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

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
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
