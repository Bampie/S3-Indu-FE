<template class="form">
  <form class="add-form">
    <div class="row">
    <div class="form-control">
      <label class="label">Name: </label>
      <input
        type="text"
        v-model="newProfile.name"
        name="name"
        class="name input-form"
      />
    </div>
    <br />

    <div class="form-control">
      <label class="label">Description: </label>
      <textarea
        type="text"
        v-model="newProfile.description"
        name="description"
        class="description input-form"
        cols="60"
        >
      </textarea>
    </div>
    <br />

    <div class="form-control">
      <label class="label">experience: </label>
      <textarea
        type="text"
        v-model="newProfile.experience"
        name="experience"
        class="delivery-time input-form"
        cols="60"
        >
      </textarea>

    </div>
    <br />

    <div class="form-control">
      <label class="label">Equipment: </label>
      <textarea
        type="text"
        v-model="newProfile.equipment"
        name="equipment"
        class="equipment input-form"
        cols="60"
        >
        </textarea>
    </div>
    <br />

    <div class="form-control">
      <label class="label">Delivery time: </label>
      <input
        type="number"
        v-model="newProfile.deliveryTime"
        name="delivery_Time"
        class="delivery-time input-form"
        />
    </div>
    <br />
    <div class="form-control">
      <label class="label">price: </label>
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
    </div>
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
        deliveryTime: this.newProfile.deliveryTime,
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
template {
  text-align: center;
}
.form {
  text-align: center;
}
/* .add-form {
  display: inline-block;
} */
  .form-control {
    width:80%;
    display:inline-block;
    height: fit-content;
    margin-left: 10%;
  }
  .input-form {
    width:60%;
    float:right;
  }
  .row{
    width:100%;
    display:block;
  }
  .label{
    width:30%;
    float:left;
  }
</style>