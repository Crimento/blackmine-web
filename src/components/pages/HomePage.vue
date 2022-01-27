<template>
  <div
    class="container mx-auto grow flex flex-col justify-center bg-base-100/75"
  >
    <div>
      <img
        class="biglogo object-contain m-auto animate__animated animate__pulse animate__slower animate__infinite"
        src="../../assets/blackmine.png"
        alt=""
      />
    </div>
    <span class="text-center text-5xl lg:text-7xl tracking-widest">
      BLACKMINE</span
    >
    <span class="text-center text-xl py-3">
      Minecraft с каплей <span class="text-primary">безумства</span>
    </span>
    <div class="grid grid-cols-3 gap-3 p-3">
      <div class="col-span-1">
        <button disabled class="btn btn-block btn-lg loading">Играть</button>
      </div>
      <div class="col-span-1">
        <button disabled class="btn btn-block btn-lg loading">Профиль</button>
      </div>
      <div class="col-span-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/rHaPnQ7"
          class="btn btn-secondary btn-block btn-lg"
          >Discord</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* tall */
.biglogo {
  height: 50vw;
  max-height: 50vw;
  width: auto;
}

/* wide */
@media (min-aspect-ratio: 1/1) {
  .biglogo {
    height: 40vh;
    max-height: 40vh;
    width: auto;
  }
}
</style>
