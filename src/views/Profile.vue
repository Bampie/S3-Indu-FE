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
      <ProfileBtn
        v-bind:account-id="accountId"
        v-bind:is-account-known-by-database="isAccountKnownByDatabase"
        v-bind:profile="profile"
      />
    </div>

    <div class="editProfileForm" v-if="profile.sellerProfile">
      <EditProfile :profile="profile" />
      <div v-if="profile.sellerProfile" class="sales">
        <SaleOverview :profile="profile" />
      </div>
      <createReciept :profile="profile" />
    </div>
    <div v-if="profile.sellerProfile != true">
      <h3 class="noProfilePage">you haven't created a Seller profile here yet!</h3>
    </div>
  </div>
</template>

<script>
import EditProfile from "@/components/EditProfile.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import axios from "axios";
import ProfileBtn from "../components/profileBtn.vue";
import SaleOverview from "@/components/SaleOverview.vue";
import createReciept from "@/components/createReciept.vue";

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
      createReciept: false,
    };
  },
  methods: {
    // initialiseren of the page, see if there's a profile or get profile.
    AccountPaginaStartUp(accountId) {
      axios
        .get(`http://localhost:8080/api/profiles/check/${accountId}`)
        .then((response) => {
          this.isAccountKnownByDatabase = response.data.isIdFound;
          if (this.isAccountKnownByDatabase) {
            axios
              .get(`http://localhost:8080/api/profiles/${accountId}`)
              .then((response) => {
                this.profile = response.data;
              });
          }
        });
    },
    watch(accountId) {
      this.AccountPaginaStartUp(accountId);
    },
  },
  mounted: function () {
    this.AccountPaginaStartUp(this.accountId);
    if (this.profile.id != null) {
      this.isAccountKnownByDatabase = true;
    }
  },
  components: { ProfileBtn, EditProfile, SaleOverview, createReciept },
};
</script>

<style>
.sales {
  align-content: center;
  width: 80%;
}
.sale-btn {
  margin-left: 15px;
}
.semi-header {
  text-align: center;
}
.noProfilePage {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 200px;
}
</style>
