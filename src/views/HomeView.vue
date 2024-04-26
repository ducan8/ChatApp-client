<template>
  <div v-if="!registerMode" class="container text-center mt-5">
    <h1>Find your match</h1>
    <p class="lead">
      Come on into your matches... all you need to do is sign up
    </p>
    <div>
      <button
        class="btn btn-primary btn-lg me-2"
        v-on:click="registerModeToggle"
      >
        Register
      </button>
      <button class="btn btn-primary btn-info btn-lg">Learn more</button>
    </div>
  </div>

  <div v-else class="container">
    <div class="row justify-content-center">
      <div class="col-4">
        <Register @cancelRegisterMode="cancelRegsiter"></Register>
      </div>
    </div>
  </div>
  <test></test>
</template>

<script>
import DataServices from "../services/data-services";
import Register from "../components/Register.vue";
import test from "./test.vue";

export default {
  name: "HomeView",
  components: {
    Register,
    test,
  },
  data() {
    return {
      users: undefined,
      registerMode: false,
    };
  },
  methods: {
    registerModeToggle() {
      this.registerMode = true;
    },
    cancelRegsiter() {
      this.registerMode = false;
    },
  },
  created() {
    DataServices.getAll().then((res) => (this.users = res.data));
  },
};
</script>

<style scoped>
h1 {
  font-weight: 700;
}
p.lead {
  font-weight: 100;
}
</style>
