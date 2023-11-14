<script setup lang="ts">

</script>

<template>
  <v-card
      color="#952175"
      theme="dark"
      class="card__box"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          Halcyon Days
        </v-card-title>

        <v-card-subtitle>Ellie Goulding</v-card-subtitle>

        <v-card-actions>
          <v-btn
              class="ms-2"
              icon="mdi-play"
              variant="text"
          ></v-btn>
        </v-card-actions>
      </div>

      <v-avatar
          class="ma-3"
          size="125"
          rounded="0"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<style scoped>
.card__box{
  max-width: 400px;
  margin: 0 auto;
}
</style>
