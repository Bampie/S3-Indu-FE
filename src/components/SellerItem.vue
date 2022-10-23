<template>
    <div class="SellerItem">
        <p class="Title">{{ Name }}</p>

        <p class="Description">
            <string>Description: </string> 
            {{ Description }}
        </p>

        <p class="Delivery">Delivery takes: {{ Delivery }} days.</p>
        <p class="Equipment">Equipment: {{ Equipment }}</p>
        <p class="Experience">My Experience: {{ Experience }}</p>
        <router-link :to="{ name:'sellerPage', params: {SId: SellerId}}">More Info</router-link>
    </div>
</template>

<script>
    export default {
        name: 'SellerItem',
        props: {
            Name: String,
            Description: String,
            Delivery: Number,
            Equipment: String,
            Experience: String,
            Id: String
        },
        data() {
            return {
                SellerId: this.Id
            }
        }
    };
</script>

<style scoped>
.SellerItem {
    border: solid;
    border-width: 2px;
    width: 60%;
    margin-left: 20%;
    margin-top: 30px;
    padding-left: 20px;
}
.Title{
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 0px;
}
.descriptionTitle{
    font-weight:600;
}
</style>