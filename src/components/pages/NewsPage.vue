<template>
  <div class="container mx-auto text-neutral bg-base-100/75 p-3 md:p-5">
    <div
      class="card bg-base-100 my-2"
      v-for="news in newslist.slice().reverse()"
      :key="news.id"
    >
      <div class="card-body">
        <h2 class="card-title text-primary">{{ news.header }}</h2>
        <p class="indent-8" v-html="news.text"></p>
        <div class="card-actions text-base-300">
          <span class="ml-auto">{{ news.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: [
        {
          id: 0,
          date: '27.01.2022',
          header: 'Перезапуск сайта и переезд на другой домен',
          text: 'Давно пора было навести тут порядок. Сайт переписан на Vue 3 и Tailwind и переехал на blackmine.cc. <br> Ушёл от reg.ru, которые украли у нас blackmine.ru. Дальнейшие обновления буду добавлять сюда.',
        },
        {
          id: 1,
          date: '31.01.2022',
          header: 'Развертывание сайта',
          text: 'GitHub Actions - классная штука! Наконец-то разобрался с автодеплоем. Вот теперь это можно считать официальным запуском :)',
        },
      ],
    };
  },
};
</script>

<style></style>
