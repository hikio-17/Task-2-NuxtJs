<template>
  <div class="lottie container-fluid d-flex justify-content-center bg-primary-subtle">
    <lottie-player
      src="https://assets3.lottiefiles.com/packages/lf20_xY418y0j6x.json"
      background="transparent"
      speed="1"
      style="width: 65%;"
      loop
      autoplay
    ></lottie-player>
  </div>
  <div class="centered text-center">
    <h1 class="text-warning display-1 font-monospace">WELCOME</h1>
    <p class="display-5 text-shadow">Pangkalan Data Siswa</p>
    <NuxtLink class="btn btn-outline-warning" to="/app">
      Go to Dashboard
    </NuxtLink>
  </div>
  <div class="layer">

  </div>
</template>
 
<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    document.head.appendChild(script);
  },
};
</script>

<style>
  .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.layer {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #9AC5F4;
  opacity: 0.6;

}
</style>

