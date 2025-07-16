<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-input v-model="email" label="Email" type="email" fill="outline" />
      <ion-input v-model="password" label="Password" type="password" fill="outline" />
      <ion-button expand="block" @click="login">Login</ion-button>
      <ion-text v-if="errorMessage" color="danger">{{ errorMessage }}</ion-text>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/init';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/home');
  } catch (err) {
    errorMessage.value = err.message;
  }
};
</script>
