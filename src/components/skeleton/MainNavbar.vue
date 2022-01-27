<template>
  <nav class="navbar mb-2 bg-base-100 sticky top-0 z-50">
    <div class="items-stretch hidden md:flex mr-auto">
      <router-link
        class="btn btn-ghost mx-1"
        v-for="link in links"
        :to="link[2]"
        :key="link[0]"
      >
        {{ link[1] }}
      </router-link>
    </div>
    <router-link to="/" class="mx-2">
      <img src="../../assets/navlogo.png" alt="" />
    </router-link>
    <div class="block md:hidden dropdown dropdown-end ml-auto">
      <div class="flex items-center">
        <button class="outline-none">
          <svg
            class="w-12 h-12"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100">
        <li v-for="link in links" :key="link[0]">
          <router-link :to="link[2]" class="btn btn-ghost mx-1">
            {{ link[1] }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        [1, 'Главная', '/'],
        [2, 'Статус', '/status'],
        [3, 'Новости', '/news'],
      ],
    };
  },
};
</script>

<style></style>
