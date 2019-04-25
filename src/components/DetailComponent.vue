<template>
    <div class="text-left justify-content-center row">
        <div class="col-3 mb-5" v-for="phone in info">
            <div class="card grow-shadow" style="width: 14rem">
                <img v-if="phone.phonePhoto != null && phone.phonePhoto != 'abc'" style="height: 16rem; width: 100%" class="card-img-top" :src="phone.phonePhoto">
                <img v-else style="height: 16rem; width: 100%" class="card-img-top" src="../assets/notfound.png">
                <div class="card-body">
                    
                    <h2 class="card-title"> {{phone.companyName}} </h2>
                    <h5 class="card-text">Produkt: <a class="font-weight-bold">{{phone.phoneName}}</a> </h5>

                    <p class="card-text">Pris: $<a class="font-weight-bold" style="color: lime">{{phone.price}}</a> </p>

                    <button v-on:click="slet()" class="btn btn-danger mr-1">Slet</button>
                    <!--<router-link :to="{name: 'DeleteComponent', params: { id: phone.phoneID, phoneName: phone.phoneName }}" class="btn btn-danger mr-1">Slet</router-link>-->
                    <router-link :to="{name: 'EditComponent', params: { id: phone.phoneID }}"  class="btn btn-success">Redigere</router-link>
      
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get(`http://localhost:60014/api/shop/${this.$route.params.id}`)
            .then(response => (this.info = response.data))
    },
    methods: {
        slet: function () {
            if (confirm(`Er du sikker på at du vil slette denne telefon`)) {
                axios
                    .delete(`http://localhost:60014/api/shop/${this.$route.params.id}`)
                    .then(window.location.replace('/Bitcoin'))
            }
            else {
                
            }
        }
    }
}
</script>
