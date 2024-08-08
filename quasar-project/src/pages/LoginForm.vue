<template>
  <q-page>
    <q-form @submit.prevent="handleLogin">
      <q-input
        v-model="email"
        label="Email"
        type="email"
        required
        :error="emailError"
        :error-message="emailErrorMessage"
      />
      <q-input
        v-model="password"
        label="Password"
        type="password"
        required
        :error="passwordError"
        :error-message="passwordErrorMessage"
      />
      <q-btn label="Login" type="submit" color="primary" />
      <q-banner v-if="errorMessage" class="q-mt-md" color="negative">
        {{ errorMessage }}
      </q-banner>
    </q-form>
  </q-page>
</template>

<script>
import { auth } from 'src/firebaseConfig';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      emailError: false,
      emailErrorMessage: '',
      passwordError: false,
      passwordErrorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = '';
      this.emailError = !this.email;
      this.passwordError = !this.password;
      
      if (this.emailError) {
        this.emailErrorMessage = 'Email is required.';
      }
      if (this.passwordError) {
        this.passwordErrorMessage = 'Password is required.';
      }
      if (this.emailError || this.passwordError) {
        return;
      }

      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        // Handle successful login
        this.$router.push('/dashboard'); // Redirect to dashboard or another page
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }
};
</script>
