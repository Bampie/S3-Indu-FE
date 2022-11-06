<template>
  <div class="seller" v-for="profile in profiles" v-bind:key="profile.id">
    <SellerItem
      :Name="profile.name"
      :Description="profile.description"
      :Delivery="profile.delivery_Time"
      :Equipment="profile.equipment"
      :Experience="profile.experience"
      :Id="profile.id"
      :Auth0="profile.auth0Id"
    />
  </div>
</template>

<script>
import SellerItem from "../components/SellerItem.vue";

export default {
  name: "HomeView",
  components: {
    SellerItem
},
  data() {
    return {
      profiles: []
    };
  },
  methods: {
    getProfiles() {
      fetch("http://localhost:8081/api/profiles")
        .then((response) => {
          if (response.ok) {
            this.profiles = response;
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.profiles = response;
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
  created: function () {
    this.getProfiles();
  },
};
</script>

<style scoped>
.seller {
  margin-bottom: 50px;
}
</style>