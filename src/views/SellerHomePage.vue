<template class="SellerPage">
  <div>
    <div class="grid-container-title">
        <h2 class="SellerTitleName">{{ profile.name }}</h2>
        <button class="Chat-Button">Open Chat</button>
    </div>
    <hr />
    <div class="grid-container">
      <div class="grid-item1 item">
        <h5 class="SellerDescriptionTitle text">Description:</h5>
        <p class="SellerDescription text">{{ profile.description }}</p>
      </div>
      <div class="grid-item4">
        <h5 class="SellerPriceTitle text">Price: {{ profile.price }}</h5>
      </div>
      <div class="grid-item2 item">
        <h5 class="SellerexperienceTitle text">Experience:</h5>
        <p class="Sellerexperience text">{{ profile.experience }}</p>
      </div>
      <div class="grid-item3 item">
        <h5 class="SellerequipmentTitle text">Equipment:</h5>
        <p class="Sellerequipment text">{{ profile.equipment }}</p>
      </div>
      
      <div class="grid-item5 item">
        <h5 class="SellerDeleveryTitle text">Delevery Time:</h5>
        <p class="SellerDelivery text">{{ profile.delivery_Time }} Days</p>
      </div>

    </div>
  </div>
</template>

<script>
const baseUrl = "http://localhost:8082/api/profiles";

export default {
  name: "SellersPage",
  profile: [],
  props: {},
  data() {
    return {
      profile: [],
      profileId: this.$route.params.SId,
    };
  },
  methods: {
    getProfileById(Id) {
      fetch(`${baseUrl}/${Id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.profile = response;
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
  created: function () {
    this.getProfileById(this.profileId);
  },
};
</script>

<style scoped>
.SellerPage {
    padding-bottom: 100px;
}
.SellerTitleName {
  text-align: center;
  grid-column: 1 / span 5;
}
.Chat-Button {
    grid-column: 6 / span 1;
    margin: 5px;
}
.SellerDescriptionTitle {
  margin-bottom: 5px;
}
.grid-container {
    display: grid;
    margin-top: 60px;
    margin-bottom: 70px;
    column-gap: 13px;
    row-gap: 10px;
    grid-template-columns: auto, auto, auto;
}
.grid-item1 {
    grid-column: 1 / span 2;
}
.grid-item2 {
    grid-column: 1 / span 1;
}
.grid-item3 {
    grid-column: 2 / span 1;
}
.grid-item4 {
    grid-column: 3 / span 1;
}
.grid-item5 {
    grid-column: 3 / span 1;
    border:transparent
}
.SellerPriceTitle {
    text-align: center;
    margin-top: 40%;
}
.item {
    border: solid;
    border-radius: 5px;
    border-width: 2px;
}
.text {
    margin-left: 20px;
    margin-top: 5px
}
.grid-container-title {
    display: grid;
}
</style>
