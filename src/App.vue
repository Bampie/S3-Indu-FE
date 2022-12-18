<template>
  <div id="app" class="d-flex flex-column h-100">
    <nav-bar />
    <div class="container flex-grow-1">
      <error />
      <div class="mt-5">
        <router-view />
      </div>
    </div>
    <br />
    <footer class="bg-light text-center p-3">
      <img
          src="./assets/Icon-tennis-ball.png"
          alt="Logo"
          style="width: 40px; height: 40px; margin-right: 30px; margin-left: 30px; margin-bottom: 20px; margin-top: 30px;"
        />
      <p style="margin-bottom: 100px;">
        TheStringers
      </p>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Error from "./components/Error";

export default {
  components: {
    NavBar,
    Error
  }
};
</script>
