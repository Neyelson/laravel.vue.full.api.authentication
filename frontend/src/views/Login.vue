<template>
  <!-- Toggle dark/light switch -->
  <ToggleDarkSwitch :absolutePosition="true" />
  <!-- Main -->
  <main class="container">

    <article class="grid">
      <div>
        <hgroup>
          <!-- Back to main page button <GoBackToMainButton /> -->
          <!-- Main login page text -->
          <h1>Sign in</h1>
          <h2>A minimalist layout for Login pages</h2>
        </hgroup>
        <form @submit.prevent="executeLogin">
          <input :disabled="isLoading" v-model="email" type="email" name="email" placeholder="Email" aria-label="Email"
            autocomplete="nickname" required />
          <input :disabled="isLoading" v-model="password" type="password" name="password" placeholder="Password"
            aria-label="Password" autocomplete="current-password" required />
          <fieldset>
            <label for="terms">
              <input v-model="remember" :checked="remember" type="checkbox" id="terms" name="terms" />
              Remember me
            </label>
          </fieldset>
          <button type="submit" class="contrast" :aria-busy="isLoading">Login</button>
          <small><router-link to="/signup">New here? Sign up</router-link></small>
        </form>
      </div>
      <div></div>
    </article>
  </main>
  <!-- ./ Main -->
</template>

<script setup>
import { login } from '@/services/authenticator.js';
import ToggleDarkSwitch from "@/components/ToggleDarkSwitch.vue";
import { ref } from 'vue'
import GoBackToMainButton from "@/components/GoBackToMainButton.vue";

// Declares initial login and password fiels and make it reactive.
const email = ref('')
const password = ref('')
const remember = ref(false)
const isLoading = ref(false)

// Below, starts loading animation and try to login.
async function executeLogin() {
  try {
    isLoading.value = true;
    await login(email.value, password.value, remember.value);
  } catch (error) {
    //console.log(error)
    //Stops loading only if fails.
    isLoading.value = false;
  } finally {
    //Anything that happens, erases password.
    password.value = '';
  }
}
</script>

<style scoped>
/* My personal below */

form {
  margin-bottom: 0px;
}

.grid {
  margin: 0 20px;
}

/* Grid */
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh);
  padding: 1rem 0;
}

article {
  padding: 0;
  overflow: hidden;
}

article div {
  padding: 1rem;
}

@media (min-width: 576px) {
  main {
    padding: 1.25rem 0;
  }

  article div {
    padding: 1.25rem;
  }
}

@media (min-width: 768px) {
  main {
    padding: 1.5rem 0;
  }

  article div {
    padding: 1.5rem;
  }
}

@media (min-width: 992px) {
  main {
    padding: 1.75rem 0;
  }

  article div {
    padding: 1.75rem;
  }
}

@media (min-width: 1200px) {
  main {
    padding: 2rem 0;
  }

  article div {
    padding: 2rem;
  }
}

/* Nav */
summary[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  background-color: transparent;
  color: var(--secondary-hover);
}

/* Hero Image */
article div:nth-of-type(2) {
  display: none;
  background-color: #374956;
  background-image: url("../assets/images/montain.jpg");
  background-position: center;
  background-size: cover;
}

@media (min-width: 992px) {
  .grid>div:nth-of-type(2) {
    display: block;
  }
}

/* Footer */
body>footer {
  padding: 1rem 0;
}
</style>