<template>
  <form class="add-form">
    <!-- enter name -->
    <div class="form-control">
      <label>Name: </label>
      <input
        type="text"
        v-model="newProfile.name"
        name="name"
        class="name input-form"
      />
    </div>
    <br />

    <div class="form-control">
      <label>Description: </label>
      <textarea
        type="text"
        v-model="newProfile.description"
        name="description"
        class="description input-form"
        >
      </textarea>
    </div>
    <br />

    <div class="form-control">
      <label>experience: </label>
      <textarea
        type="text"
        v-model="newProfile.experience"
        name="experience"
        class="delivery-time input-form"
        >
      </textarea>

    </div>
    <br />

    <div class="form-control">
      <label>Equipment: </label>
      <textarea
        type="text"
        v-model="newProfile.equipment"
        name="equipment"
        class="equipment input-form"
        >
        </textarea>
    </div>
    <br />

    <div class="form-control">
      <label>Delivery time: </label>
      <input
        type="number"
        v-model="newProfile.delivery_Time"
        name="delivery_Time"
        class="delivery-time input-form"
        />
    </div>
    <br />
    <div class="form-control">
      <label>price: </label>
      <input
        type="number"
        v-model="newProfile.price"
        name="price"
        step="0.01"
        class="price input-form"
        />
    </div>    
    <br />
    <button class="btn btn-block" @click="createSellerProfile()">Save</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "editProfile",
  props: {
    profile: Object,
  },
  data() {
    return {
      newProfile: this.profile
    }
  },
  methods: {
    createSellerProfile() {
      axios.put("http://localhost:8080/api/profiles/edit", {
        auth0Id: this.profile.auth0Id,
        name: this.newProfile.name,
        description: this.newProfile.description,
        delivery_Time: this.newProfile.delivery_Time,
        equipment: this.newProfile.equipment,
        experience: this.newProfile.experience,
        price: this.newProfile.price,
        sellerProfile: true,
      })
      .finally(() => {
        this.$router.push("/profile")
      })
      ;
    },
  },
};
</script>

<style>
.form-control {
  height: fit-content;
  width:max-content;
}
.input-form {
  widows: 80%;
}

</style>