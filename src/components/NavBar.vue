<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">MyApp</a>

      <ul v-if="loggedIn" class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Matches</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Lists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Messages</a>
        </li>
      </ul>

      <div class="dropdown" v-if="loggedIn">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          Welcome {{ UserName }}
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Edit profile</a></li>
          <li><a class="dropdown-item" @click="logout" href="#">Log out</a></li>
        </ul>
      </div>

      <form
        v-if="!loggedIn"
        class="d-flex"
        @submit.prevent="login"
        autocomplete="off"
      >
        <input
          class="form-control me-2"
          type="text"
          name="username"
          v-model="model.username"
          placeholder="Username"
        />
        <input
          class="form-control me-2"
          type="password"
          name="password"
          v-model="model.password"
          placeholder="Password"
        />
        <button class="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </nav>
</template>

<script>
import accountService from "../services/account-services";

export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    UserName() {
      return this.$store.state.auth.user.username;
    },
  },
  created() {
    if (this.loggedIn) {
    }
  },
  methods: {
    login() {
      accountService
        .login(this.model)
        .then((res) => {
          this.$store.dispatch("auth/loginSuccess", res);
          console.log("Dang nhap thanh cong rui");
        })
        .catch(() => {
          this.$store.dispatch("auth/loginFailure");
          console.log("Dang nhap that bai ruii");
        });
    },

    logout() {
      accountService.logout();
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style scoped>
/* form {
    margin-right: 20px;
  }
  form input {
    border: 2px solid green;
    width: 105px;
    margin-right: 15px;
    border-radius: 15px;
    padding: 3px 0 3px 5px;
  }
  form button {
    width: 100px;
    padding: 3px 10px;
    background-color: green;
    color: whitesmoke;
    border-radius: 15px;
    margin: 0 10px;
    border: 2px;
  }
  form button:hover {
    color: green;
    background-color: #fff;
    border: 2px solid green;
  } */
</style>
