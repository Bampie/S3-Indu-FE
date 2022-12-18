<template>
  <div style="margin-bottom: 160px;">
    <div class="seller" v-for="profile in profiles" v-bind:key="profile">
      <SellerItem
        :Name="profile.name"
        :Description="profile.description"
        :Delivery="profile.deliveryTime"
        :Equipment="profile.equipment"
        :Experience="profile.experience"
        :Id="profile.id"
        :Auth0="profile.auth0Id"
        class="sellerOverview"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const SellerItem = defineAsyncComponent(() =>
  import("../components/SellerItem.vue")
);

export default {
  name: "HomeView",
  components: {
    SellerItem,
  },
  data() {
    return {
      profiles: [],
    };
  },
  methods: {
    getProfiles() {
      fetch("http://localhost:8080/api/profiles")
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
