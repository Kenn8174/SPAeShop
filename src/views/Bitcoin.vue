<template>
    <div class="row justify-content-center">
        <div class="col-3 mb-5 text-left" v-for="phone in info">
            <div style="width: 14rem" class="card grow-shadow p-1">
                <img v-if="phone.phonePhoto != null && phone.phonePhoto != 'abc'" style="height: 16rem; width: 100%" class="card-img-top" :src="phone.phonePhoto">
                <img v-else style="height: 15rem; width: 100%" class="card-img-top" src="../assets/notfound.png">
                <div class="card-body">

                    <h2 class="card-title"> {{ phone.companyName }} </h2>
                    <h5 class="card-text"> {{ phone.phoneName }} </h5>
                    
                    <p v-if="phone.price <= 0" class="card-text"> $ <a style="color: lime" class="font-weight-bold"><em>GRATIS</em></a> </p>
                    <p v-else class="card-text"> $ <a style="color: lime" class="font-weight-bold">{{phone.price}}</a> </p>
                            
                    <a href="#" class="btn btn-success mr-1"> KØB </a>

                    <router-link :to="{name: 'DetailComponent', params: { id: phone.phoneID}}" :key="phone.phoneID"  class="btn btn-primary">Information</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            info: null,
            loading: true,
            errored: false
        }
    },
    mounted () {
        axios
            .get('http://localhost:60014/api/shop')
            .then(response => (this.info = response.data))
            .catch(error => {
                console.log(error)
                this.errored = true
            })
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    }
}
</script>
