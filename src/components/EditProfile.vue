<template>
  <form @submit="onSubmit" class="add-form">
    <!-- enter name -->
    <div class="form-control">
      <label>Name: </label>
      <input
        type="text"
        v-model="name"
        name="name"
      />
    </div>
    <div class="form-control">
      <label>Description</label>
      <input
        type="text"
        v-model="description"
        name="description"
        />
    </div>
    <input type="submit" value="Save Information" class="btn btn-block" @click="this.createSellerProfile()" />
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "editProfile",
  props: {
    profile: Object,
  },
  methods: {
    createSellerProfile() {
      axios.put("http://localhost:8080/api/profiles/edit", {
        auth0Id: this.profile.auth0Id,
        sellerProfile: true,
        name: this.name,
        description: this.description,
        price: 0,
        delivery_Time: 0,
      });
    },
  },
};
</script>
