<template>
  <div class="container">
    <div class="row align-items-center profile-header">
      <div class="col-md-2 mb-3">
        <img
          :src="user?.picture"
          alt="User's profile picture"
          class="rounded-circle img-fluid profile-picture"
        />
      </div>
      <div class="col-md text-center text-md-left">
        <h2>{{ user?.name }}</h2>
        <p class="lead text-muted">{{ user?.email }}</p>
      </div>
      <!-- btn's for creating profiles -->
      <div class="col-md text-right text-md-right">
        <button @click="createGeneralProfile(accountId, isAccountKnownByDatabase)"
          v-if="(isAccountKnownByDatabase == false)">
          Create basic Profile
        </button>
        <button
          @click="createSellerProfile(accountId)"
          v-if="(isAccountKnownByDatabase = true && profile.sellerProfile == false)">
          Create Seller profile
        </button>
        <button
          @click="toBuyerProfile(accountId)"
          v-if="(isAccountKnownByDatabase = true && profile.sellerProfile == true)">
          Stop the Seller profile
        </button>
      </div>
    </div>
    <div class="editProfileForm">
      {{ profile }}<br />
      {{isAccountKnownByDatabase}}
    </div>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import axios from "axios";

export default {
  name: "profile",
  data() {
    const auth0 = useAuth0();

    return {
      user: auth0.user,
      accountId: auth0.user.value.sub,
      err: null,
      isAccountKnownByDatabase: null,
      profile: [],
    };
  },
  methods: {
    // aanmaken van een buyers profile
    createGeneralProfile(userId, isAccountKnown) {
      if (isAccountKnown == false) {
        axios.post("http://localhost:8080/api/profiles", {
          auth0Id: userId,
          sellerProfile: false,
          price: 0,
          delivery_Time: 0,
        });
      }
    },
    // change profile to seller
    createSellerProfile(userId) {
      axios.put("http://localhost:8080/api/profiles/edit", {
        auth0Id: userId,
        sellerProfile: true,
        price: 0,
        delivery_Time: 0,
      });
    },
    //change profile to buyer profile
    toBuyerProfile(userId) {
      axios.put("http://localhost:8080/api/profiles/edit", {
        auth0Id: userId,
        sellerProfile: false,
        price: 0,
        delivery_Time: 0,
      });
    },
    // initialiseren of the page, see if there's a profile or get profile.
    AccountPaginaStartUp(accountId) {
      axios
        .get(`http://localhost:8080/api/profiles/check/${accountId}`)
        .then((response) => {
          this.isAccountKnownByDatabase = response.data.isIdFound;
          console.log("this is the response "+ this.isAccountKnownByDatabase);
          if (this.isAccountKnownByDatabase == true) {
            console.log("lol")
            axios
              .get(`http://localhost:8080/api/profiles/${accountId}`)
              .then((response) => {
                this.profile = response.data;
              });
          }
        });
    },
  },
  mounted: function () {
    this.AccountPaginaStartUp(this.accountId);
    if (this.profile.id != null) {
      this.isAccountKnownByDatabase = true;
    }
  },
};
</script>
