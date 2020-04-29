<template>
     <header id="header">
            <a href="index.html" class="logo">
              <strong>Pranama</strong>
            </a>
            <ul class="icons">
              <li v-if="isAuthenticated">
                <a href="#" @click.prevent="handleLogout">
                  <span class="label">Logout</span>
                </a>
              </li>
              <li v-else>
                <router-link :to="{ name: 'LoginPage' }">
                  <span class="label">Login</span>
                </router-link>
              </li>
              <li>
                <a href="#" class="icon brands fa-twitter">
                  <span class="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands fa-facebook-f">
                  <span class="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands fa-snapchat-ghost">
                  <span class="label">Snapchat</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands fa-instagram">
                  <span class="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands fa-medium-m">
                  <span class="label">Medium</span>
                </a>
              </li>
            </ul>
          </header>
</template>

<script>
import logoutMixin from "@/mixins/logout.js";

export default {
  mixins: [logoutMixin]
}
</script>