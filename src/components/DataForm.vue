<template>
    <div class="data-form">
        <h2>Data Form</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entry, index) in dataEntries" :key="index">
                    <td>{{ entry.name }}</td>
                    <td>{{ entry.email }}</td>
                    <td>{{ entry.message }}</td>
                    <td>{{ entry.created_at }}</td>
                    <td>
                        <Button 
                            icon="pi pi-times" 
                            severity="danger" 
                            rounded 
                            aria-label="Delete" 
                            @click="deleteContact(entry.id)" 
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Botón para volver al formulario de contacto -->
        <router-link to="/">
            <Button label="Back to Contact Form" class="back-btn" />
        </router-link>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button'; // Importa el componente Button

const dataEntries = ref([]); // Aquí se almacenarán los datos traídos desde el backend

const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3001/contactos'); // Cambia la URL según tu backend
        dataEntries.value = await response.json(); // Almacena los datos obtenidos en dataEntries
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Función para eliminar un contacto
const deleteContact = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/contactos/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Filtrar los datos eliminando el contacto eliminado de dataEntries
            dataEntries.value = dataEntries.value.filter((entry) => entry.id !== id);
            console.log('Contacto eliminado');
        } else {
            console.error('Error al eliminar el contacto');
        }
    } catch (error) {
        console.error('Error al eliminar el contacto:', error);
    }
};

onMounted(() => {
    fetchData(); // Llama a la función fetchData cuando se monte el componente
});
</script>

<style scoped>
/* Aquí puedes agregar estilos para el componente */
.data-form {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.data-form h2 {
    text-align: center;
    margin-bottom: 2rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f4f4f4;
    font-weight: bold;
}

.back-btn {
    margin-top: 5rem;
    background-color: #007bff;
    color: white;
    width: 200px; /* Aumenta el ancho del botón */
    height: 50px; /* Aumenta la altura del botón */
    font-size: 16px; /* Aumenta el tamaño de la fuente */
    border: none; /* Elimina el borde predeterminado */
    border-radius: 4px; /* Esquinas redondeadas */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    transition: background-color 0.3s ease; /* Agrega una transición para el hover */
}

.back-btn:hover {
    background-color: #0056b3; /* Cambia el color de fondo al pasar el mouse */
}
</style>
