<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-input
        v-model="email"
        label="Email"
        type="email"
        fill="outline"
        @ionBlur="email = email.trim()"
      />
      <ion-input
  :value="email"
  label="Email"
  type="email"
  fill="outline"
  @ionInput="email = $event.target.value"
  @ionBlur="email = email.trim()"
/>
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
  errorMessage.value = '';
  const trimmedEmail = email.value.trim();
  const trimmedPassword = password.value.trim();

  // Basic validation
  if (!trimmedEmail) {
    errorMessage.value = 'Email is required.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errorMessage.value = 'Please enter a valid email address.';
    return;
  }
  if (!trimmedPassword || trimmedPassword.length < 6) {
    errorMessage.value = 'Password must be at least 6 characters.';
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
    router.push('/home');
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      errorMessage.value = 'This email is already registered.';
    } else if (err.code === 'auth/invalid-email') {
      errorMessage.value = 'Invalid email address.';
    } else {
      errorMessage.value = err.message || 'Registration failed.';
    }
    console.error("Registration Error:", err);
  }
};
</script>