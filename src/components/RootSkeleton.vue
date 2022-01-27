<template>
  <div class="min-h-screen w-full flex flex-col main-background">
    <MainNavbar></MainNavbar>
    <div id="mainwindow" class="grow flex">
      <Particles
        id="particles"
        :options="{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.75,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 6,
              random: true,
            },
            color: {
              value: ['#fdcf58', '#757676', '#f27d0c', '#333333', '#ffffff'],
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 75,
                speed: 1,
                value: 10,
              },
            },
          },
        }"
      ></Particles>
      <router-view></router-view>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainNavbar from './skeleton/MainNavbar.vue';
import MainFooter from './skeleton/MainFooter.vue';
export default { components: { MainNavbar, MainFooter } };
</script>

<style>
.main-background {
  background-image: url('../assets/bg.png');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
