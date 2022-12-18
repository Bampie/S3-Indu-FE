<template>
  <div>
    <h5 class="title">create sale</h5>
    <form>
      <div class="form-control">
        <label class="label">Title: </label>
        <input
          type="Text"
          v-model="sale.title"
          name="title"
          class="delivery-time input-form"
        />
      </div>
      <div class="form-control">
        <label class="label">Description: </label>
        <input
          type="Text"
          v-model="sale.description"
          name="description"
          class="delivery-time input-form"
        />
      </div>
      <div class="form-control">
        <label class="label">Price: </label>
        <input
          type="number"
          step="0.01"
          v-model="sale.price"
          name="description"
          class="delivery-time input-form"
        />
      </div>
      <div class="form-control">
        <label class="label">Date: </label>
        <input
          type="Date"
          v-model="sale.date"
          name="description"
          class="delivery-time input-form"
        />
      </div>

      <div class="form-control">
        <label class="label">Costumer note: </label>
        <input
          type="Text"
          v-model="sale.costumerNote"
          name="description"
          class="delivery-time input-form"
        />
      </div>
      <br />
      <button @click.prevent="createSale()" class="add-sale-btn">create</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "createReciept",
  props: {
    profile: Object,
  },
  data() {
    return {
      sale: [],
    };
  },
  methods: {
    createSale() {
      axios
        .post("http://localhost:8080/api/sale", {
          title: this.sale.title,
          description: this.sale.description,
          price: this.sale.price,
          costumerNote: this.sale.costumerNote,
          aankoopDatum: this.sale.date,
          profile: this.profile,
        })
        .finally(() => {
          // window.location.reload();
        });
    },
  },
};
</script>

<style scoped>
.add-sale-btn {
  align-content: center;
}
.title {
  text-align: center;
  margin-top: 20px;
}
.form-control {
  /* width:80%; */
  display: inline-block;
  height: fit-content;
  /* margin-left: 10%; */
}
.input-form {
  /* width:60%; */
  float: right;
}
.row {
  width: 100%;
  display: block;
}
.label {
  /* width:30%; */
  float: left;
}
</style>
