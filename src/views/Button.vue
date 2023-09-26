<template>
  <v-card>
        <v-container
          class="d-flex justify-center align-center text-h5"
          style="min-height: 300px;"
        >
          <v-container>
            <v-container class="text-center">
              <v-row justify="center">
                <v-col cols="12" sm="6" md="4">
                  <v-btn block rounded="0" size="x-large">Rounded 0</v-btn>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-btn block rounded="xs" size="x-large">Rounded xs</v-btn>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-btn block rounded="sm" size="x-large">Rounded sm</v-btn>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-btn block size="x-large">Button</v-btn>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-btn block rounded="lg" size="x-large">Rounded lg</v-btn>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-btn block rounded="xl" size="x-large">Rounded xl</v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <v-btn density="compact" icon="mdi-plus"></v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn density="comfortable" icon="mdi-vuetify"></v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn density="default" icon="mdi-open-in-new"></v-btn>
                </v-col>
              </v-row>

              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <v-btn icon="mdi-account" size="x-small"></v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn icon="mdi-plus" size="small"></v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn icon="mdi-vuetify"></v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn icon="mdi-open-in-new" size="large"></v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn icon="mdi-calendar" size="x-large"></v-btn>
                </v-col>
                <v-col cols="auto">
                  <div class="text-center">
                    <v-btn
                      prepend-icon="mdi-check-circle"
                      append-icon="mdi-account-circle"
                    >
                      <template v-slot:prepend>
                        <v-icon color="success"></v-icon>
                      </template>

                      Button

                      <template v-slot:append>
                        <v-icon color="warning"></v-icon>
                      </template>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-btn
                :loading="loading"
                class="flex-grow-1"
                height="48"
                variant="elevated"
                color="blue"
                @click="load"
                block
              >
                Take Checkup
              </v-btn>
            </v-container>
            <v-card color="grey">
                <div class="text-center">
                  <v-chip
                    v-if="chip"
                    class="ma-2"
                    closable
                    @click:close="chip = false"
                  >
                    Closable
                  </v-chip>

                  <v-btn
                    v-if="!chip"
                    close
                    color="primary"
                    dark
                    @click="chip = true"
                  >
                    Reset Chip
                  </v-btn>
                </div>
            </v-card>
<!--            <create-excel />-->
          </v-container>s
        </v-container>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from "vue";
import CreateExcel from "@/components/createExcel.vue";

const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
const chip = ref(true);
</script>

<style scoped>

</style>
