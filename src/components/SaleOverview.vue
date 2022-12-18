<template>
  <div class="sales">
    <h2>Sales</h2>
    <div v-for="sale in profile.sales" v-bind:key="sale" class="sale-tile">
      <h4>{{ sale.title }}</h4>
      <p>
        Description: {{ sale.description }}
        <br />
        Price: {{ sale.price }}
        <br />
        Date: {{ sale.aankoopDatum }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "saleOverview",
  props: {
    profile: Object,
  },
};
</script>

<style>
.sales {
  margin-top: 50px;
  text-align: center;
  width: 80%;
  margin-left: 10%;
}
.sale-tile {
  border: 2px solid black;
  margin-bottom: 20px;
  align-content: center;
}
</style>
