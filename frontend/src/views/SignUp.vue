<template>
  <main id="mainContainer" class="container">

    <nav aria-label="breadcrumb">
      <ul>
        <li><a href="/"><i class="fa-regular fa-circle-left"></i> Go back to main page</a></li>
      </ul>
    </nav>

    <hgroup>
      <h1>Forms</h1>
      <h2>All form elements are fully responsive in pure semantic HTML, allowing forms to scale gracefully across devices
        and viewports.</h2>
    </hgroup>

    <form @submit.prevent="executeCreateAccount()">

      <!-- Grid -->
      <div class="grid">

        <!-- Markup example 1: input is inside label -->
        <label for="fullname">
          Full name
          <input v-model="fullname" type="text" id="fullname" name="fullname" placeholder="John Doe" required>
        </label>

        <!-- Markup example 2: input is after label -->
        <label for="email">Email address
          <input v-model="email" type="email" id="email" name="email" placeholder="example@example.com" required>
          <small>We'll never share your email with anyone else.</small>
        </label>

      </div>

      <!-- Grid -->
      <div class="grid">

        <!-- Markup example 1: input is inside label -->
        <label for="password">
          Password
          <input v-model="password" type="password" id="password" name="password" placeholder="Password" required>
          <small>Password must be 8-20 characters, with a mix of uppercase and lowercase letters, numbers, and
            symbols.</small>
        </label>

        <label for="confirmpassword">
          Confirm password <span id="passwordsDoesntMatchAlert" v-if="passwordsDoesntMatch">Passwords doesn't
            match</span>
          <input v-model="confirmpassword" type="password" id="confirmpassword" name="confirmpassword"
            placeholder="Confirm password" :aria-invalid="passwordsDoesntMatch" required>
        </label>

      </div>

      <!-- Shows errors -->
      <ul id="formErrorList">
        <div v-if="displayErrors && errorMessages.length > 0">
          <li v-for="errorMessage in errorMessages" :key="errorMessage">{{ errorMessage }}</li>
        </div>
      </ul>

      <!-- Button -->
      <button type="submit" :disabled="isExecutingUpdate || passwordsDoesntMatch">Create account</button>
    </form>

  </main>
</template>

<style scoped>
#mainContainer {
  padding-top: calc(var(--block-spacing-vertical) + 3.5rem);
}

#formErrorList {
  margin-bottom: 0;
}
</style>

<script setup>
import axios from 'axios';
import { notify } from '@/services/notificator.js';
import { ref, watch } from 'vue'

const fullname = ref('');
const email = ref('');
const password = ref('');
const confirmpassword = ref('');

const displayErrors = ref(null);
const errorMessages = ref([]);
const passwordsDoesntMatch = ref(null);
const isExecutingUpdate = ref(false);

function executeCreateAccount() {
  //console.log(fullname.value + '\n' + email.value + '\n' + password.value + '\n' + confirmpassword.value);
}

// Check if password input has changed, if yes, removes errors from screen. 
watch([password, confirmpassword], () => {
  // aiojsdijaiosd
  if ((password.value !== '') || (confirmpassword.value !== '')) {
    // Hide error block element
    displayErrors.value = null;
    //Show success message
    //showUpdateSuccessMessage.value = false;
  }
  // If confirm new password is not empty and doesnt match, show alert.
  if ((confirmpassword.value !== '') && (password.value !== confirmpassword.value)) {
    passwordsDoesntMatch.value = true;
  } else {
    passwordsDoesntMatch.value = null;
  }
})

</script>