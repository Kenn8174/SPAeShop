<template>
    <div>
        <img src="https://media.giphy.com/media/kFgzrTt798d2w/giphy.gif" alt="">
        <!--<h1 class="mb-5 text-danger font-weight-bold">
            Er du sikker på at du vil slette {{$route.params.phoneName}}
        </h1>
        <div class="form-group">
            <router-link to="/Bitcoin" class="btn btn-danger mr-1">Anullere</router-link>
            <button v-on:click="slet()" type="submit" class="btn btn-primary">Slet</button>
        </div>-->
    </div>
</template>

<script>
import axios from 'axios'
import { setTimeout } from 'timers';
export default {
    mounted () {
        setTimeout(function() {
            window.location.replace('/Bitcoin')
        }, 2000)
        //window.location.replace('/Bitcoin')
    }
    /*methods: {
        slet: function () {
            axios
            .delete(`http://localhost:60014/api/shop/${this.$route.params.id}`)
            .then(window.location.replace('/Bitcoin'))
        }
    }*/
}
</script>
