<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-input v-model="email" label="Email" type="email" fill="outline" />
      <ion-input v-model="password" label="Password" type="password" fill="outline" />
      <ion-button expand="block" @click="register">Register</ion-button>
      <ion-text v-if="errorMessage" color="danger">{{ errorMessage }}</ion-text>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase/init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const register = async () => {
  try {
    const trimmedEmail = email.value.trim();
    const trimmedPassword = password.value.trim();
    await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
    router.push('/home');
  } catch (err) {
    errorMessage.value = err.message;
    console.error("Registration Error:", err);
  }
};

</script>
