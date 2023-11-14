<script setup lang="ts">

</script>

<template>
  <v-layout>
    <v-app-bar
        color="deep-purple-lighten-2"
    >
      <template v-slot:image>
        <v-img
            gradient="to top right, rgba(201,164,217,.8), rgba(226,187,244,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Music app by Mark</v-app-bar-title>

      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </v-layout>
</template>

<style scoped>

</style>
