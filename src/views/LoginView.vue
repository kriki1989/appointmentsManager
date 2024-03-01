<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth';

const store = useAuthStore();
const router = useRouter()
const errorMessage = ref('');

const { handleSubmit } = useForm({
  validationSchema: {
    username (value) {
      if (value) return true
      return 'Username is required'
    },
    password (value) {
      if (value) return true
      return 'Password is required'
    }
  },
})

const username = useField('username');
const password = useField('password');

const login = handleSubmit( values => {
    let response = store.login(values);
    if (response === undefined) {
        router.push({ name: 'listAppointments' });
    } else {
        errorMessage.value = response;
    }
})
</script>

<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent="login">
                <v-text-field
                    variant="outlined"
                    v-model="username.value.value"
                    label="Username"
                ></v-text-field>

                <v-text-field
                    variant="outlined"
                    v-model="password.value.value"
                    type="password"
                    label="Password"
                ></v-text-field>

                <span class="errorClass mt-2 mb-4" v-if="errorMessage">{{ errorMessage }}</span>

                <v-btn type="submit" color="primary" block class="mt-2">Login</v-btn>

            </v-form>
        </v-sheet>
    </div>
</template>

<style scoped>
.errorClass {
    color:red;
    font-style: italic;
}
</style>