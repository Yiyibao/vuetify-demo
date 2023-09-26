<template>
  <v-app>

    <v-main>
        <router-view />
    </v-main>


    <v-navigation-drawer color="rgba(242, 242, 242, 1)">
      <div class="logo-container">
        <img src="/logo2.svg" class="menu-logo"/>
      </div>
      <v-list>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Test"
            ></v-list-item>
          </template>
              <v-list-item
                v-for="([title, icon, path], i) in tests"
                :key="i"
                :prepend-icon="icon"
                :value="title"
                :title="title"
                :to="path"
              >
              </v-list-item>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Table"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon, path], i) in tables"
            :key="i"
            :prepend-icon="icon"
            :value="title"
            :title="title"
            :to="path"
          >
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!--      头部菜单-->
    <v-app-bar
      color="rgba(242, 242, 242, 1)"
    ><template #prepend>
      <v-btn icon=""></v-btn>
    </template>

      <v-btn icon="mdi-archive-plus-outline" class="ms-5"></v-btn>

      <v-btn icon="mdi-alert-circle-outline"></v-btn>

      <v-btn icon="mdi-delete-outline"></v-btn>

      <template v-if="$vuetify.display.smAndUp">
        <v-divider
          class="mx-3 align-self-center"
          length="24"
          thickness="2"
          vertical
        ></v-divider>

        <v-btn icon="mdi-folder-outline"></v-btn>

        <v-btn icon="mdi-tag-outline"></v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
<!--              <div style="justify-content: center;display: flex">-->
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_clcjbnHwbFu8qZCH_RiekyJAQtHhkZJ-IRFFH2Aspw&s" class="user-img"/>
<!--              </div>-->
            </v-btn>
          </template>
          <v-card
            class="mx-auto"
            width="256"
          >
            <v-layout>
              <v-navigation-drawer permanent absolute>
                <v-list>
                  <v-list-item
                    prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_clcjbnHwbFu8qZCH_RiekyJAQtHhkZJ-IRFFH2Aspw&s"
                    title="Hu Fan"
                    subtitle="hufan@google.com"
                  >
                    <template v-slot:append>
                      <v-btn
                        size="small"
                        variant="text"
                        icon="mdi-menu-down"
                      ></v-btn>
                    </template>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list
                  :lines="false"
                  density="compact"
                  nav
                >
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    active-color="primary"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>

              <v-main style="height: 354px;"></v-main>
            </v-layout>
          </v-card>
        </v-menu>

      </template></v-app-bar>
  </v-app>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import User from "@/components/User.vue";

const tests = [
  ['Card', 'mdi-account-multiple-outline','/test/card'],
  ['Button', 'mdi-cog-outline','/test/button'],
]

const tables = [
  ['FirstTable', 'mdi-account-multiple-outline','/table/firstTable'],
  ['FirstEcharts', 'mdi-account-multiple-outline','/table/firstEcharts'],
  ['SecondEcharts', 'mdi-account-multiple-outline','/table/secondEcharts'],
]

const items = [
  { text: 'My Files', icon: 'mdi-folder' },
  { text: 'Shared with me', icon: 'mdi-account-multiple' },
  { text: 'Starred', icon: 'mdi-star' },
  { text: 'Recent', icon: 'mdi-history' },
  { text: 'Offline', icon: 'mdi-check-circle' },
  { text: 'Uploads', icon: 'mdi-upload' },
  { text: 'Backups', icon: 'mdi-cloud-upload' },
]
</script>

<style scoped>
.buttonPage {
  font-size: 24px;
  font-weight: 500;
  color: black;
}

.menu-logo {
  width: 230px;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.user-img {
  border-radius: 50%;
  width: 40px;
  overflow: hidden;
  object-fit: cover;
}
</style>
