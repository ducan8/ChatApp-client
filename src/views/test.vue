<template>
  <div class="mt-5">
    <h2>Test watcher</h2>
    <button @click="film.push('new film')">click</button>
    <p>Result: {{ film }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      film: ["test", "Gozrilla"],
      //   film: {
      //     name: "",
      //     director: "",
      //   },
    };
  },
  watch: {
    film: {
      handler(newValue) {
        console.log("search film: " + newValue);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
