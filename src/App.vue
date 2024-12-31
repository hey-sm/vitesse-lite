<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="/avatar.jpg"
            subtitle="1760967618@qq.com"
            title="hey"
          />
        </v-list>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Vueuse" value="Vueuse" @click=" router.push('/Vueuse')" />
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared" />
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" />
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </main>
</template>

<script  setup lang="ts">
const router = useRouter()
</script>
