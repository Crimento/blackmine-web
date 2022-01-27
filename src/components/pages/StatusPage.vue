<template>
  <div class="container mx-auto text-neutral bg-base-100/75 p-3 md:p-5">
    <div class="grid grid-cols-10 gap-4" v-for="p in progress" :key="p.name">
      <div class="col-span-2">{{ p.name }}</div>
      <div class="col-span-7">
        <progress
          max="100"
          :value="p.progress"
          class="progress progress-primary"
        ></progress>
      </div>
      <div class="col-span-1">
        <div v-if="p.info" class="dropdown dropdown-hover dropdown-end">
          <div tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div
            tabindex="0"
            class="shadow card compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <div class="card-body">
              <p>{{ p.info }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: [
        {
          name: 'Сайт',
          progress: 99,
          info: 'Сайт переписан на Vue + Tailwind, поигрался с tsParticles. Красиво? Красиво.',
        },
        {
          name: 'Лаунчер',
          progress: 0,
          info: 'Пора мигрировать на что-то посвежее, придется опять покопаться с дизайном.',
        },
        {
          name: 'Модлист',
          progress: 50,
          info: "GT6 + HBM's Nuclear Tech. У меня была почти готовая сборка, но я пропустил момент, где она сломалась. Да и с проблемами с Log4j надо разобраться.",
        },
        {
          name: 'Квестбук',
          progress: 10,
          info: 'Пока на стадии идей',
        },
      ],
    };
  },
};
</script>

<style></style>
