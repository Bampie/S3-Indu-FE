<template>
  <div>
    <h3>Welkom op de hoofdpagina! lol</h3>
    <hr />
    <home-view />
  </div>
</template>

<script>
import HomeView from "../views/HomeView";

export default {
  name: "home",
  components: {
    HomeView,
  },
};
</script>

<style lang="css" scoped>
.next-steps .fa-link {
    margin-right: 5px;
}
</style>
