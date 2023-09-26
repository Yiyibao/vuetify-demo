<script setup lang="ts">
import CreateExcel from "@/components/createExcel.vue";

const page = 1;
</script>

<template>
  <v-sheet elevation="6">
    <v-tabs
      bg-color="indigo"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tab
        v-for="i in 3"
        :key="i"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs>
  </v-sheet>
  <create-excel />
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
              :total-visible="7"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.text-center {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
}
</style>
