<template>
  <form @submit.prevent="register" class="mt-5" autocomplete="off">
    <h2 class="text-center text-primary font-weight-bold">Sign up</h2>
    <hr />
    <div class="mb-3">
      <input
        type="text"
        placeholder="Username"
        class="form-control"
        name="username"
        v-model="model.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        name="password"
        v-model="model.password"
      />
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-success me-2">Sign in</button>
      <button type="button" class="btn btn-default" @click="cancel">
        Cancel
      </button>
    </div>
  </form>
</template>

<script>
import accountService from "../services/account-services";

export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    cancel() {
      this.$emit("cancelRegisterMode");
    },
    register() {
      accountService
        .register(this.model)
        .then((res) => {
          this.$store.dispatch("auth/registerSuccess", res);
          console.log(res);
        })
        .catch(() => {
          this.$store.dispatch("auth/registerFailure", null);
        });
      this.cancel();
    },
  },
};
</script>
../services/account-services
