<script setup>
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();
const userName = computed(() => authStore.getUserName);
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        class="bg-blue-darken-4"
        theme="dark"
        permanent
      >
        <v-list color="transparent">

          <v-list-item
            prepend-icon="mdi-account"
            :title="'Hi ' + userName"
            id="username"
          ></v-list-item>
          <RouterLink to="/">
            <v-list-item prepend-icon="mdi-view-dashboard" title="Appointments List"></v-list-item>
          </RouterLink>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="authStore.logout()">
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <div style="padding: 12px 20px">
          <RouterView />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
#username :deep(.v-list-item__content .v-list-item-title) {
  font-weight: 900;
  color: #BBDEFB;
}

a {
  text-decoration: none;
}

a.router-link-active .v-list-item {
  background-color: #1E88E5;
  color: white;
}

a.router-link-active :deep(.v-list-item-title) {
  font-weight: bold;
}
</style>