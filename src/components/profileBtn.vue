<template>
  <div class="col-md text-right text-md-right">
    <!-- the user want to make a profile -->
    <button
      @click="createGeneralProfile(accountId, isAccountKnownByDatabase)"
      v-if="isAccountKnownByDatabase == false"
    >
      Create basic Profile
    </button>
    <!-- the user has an account and wants to make an seller profile -->
    <button
      @click="createSellerProfile(accountId)"
      v-if="isAccountKnownByDatabase == true && profile.sellerProfile == false"
    >
      Create Seller profile
    </button>
    <button
      @click="toBuyerProfile(accountId)"
      v-if="isAccountKnownByDatabase == true && profile.sellerProfile == true"
    >
      Stop the Seller profile
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "profileBtn",
  props: {
    accountId: String,
    isAccountKnownByDatabase: Boolean,
    profile: Object,
  },
  data() {
    return{
      newProfile: this.profile
    }
  },
  methods: {
    createGeneralProfile(userId, isAccountKnown) {
      if (isAccountKnown == false) {
        axios
          .post("http://localhost:8081/api/profiles", {
            auth0Id: userId,
            sellerProfile: false,
            price: 0,
            delivery_Time: 0,
          })
          .finally(() => {
            window.location.reload();
          });
      }
    },
    // change profile to seller
    createSellerProfile(userId) {
      axios
        .put("http://localhost:8081/api/profiles/edit", {
          auth0Id: userId,
          sellerProfile: true,
          price: 0,
          delivery_Time: 0,
        })
        .finally(() => {
          window.location.reload();
        });
    },
    //change profile to buyer profile
    toBuyerProfile(userId) {
      axios
        .put("http://localhost:8081/api/profiles/edit", {
          auth0Id: userId,
          sellerProfile: false,
          price: 0,
          delivery_Time: 0,
        })
        .finally(() => {
          window.location.reload();
        });
    },
  },
};
</script>
