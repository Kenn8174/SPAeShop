<template>
    <div class="row">
        <div class="col-4 mb-5" v-for="pro in produkter" :key="pro.id" :pro="pro">
            <div class="card grow-shadow" style="width: 98%">
                <img class="card-img-top" :src="pro.img">
                <div class="card-body">

                    <h4 class="card-title"> {{pro.title}} </h4>

                    <p v-if="pro.butik == true" class="card-text" style="color: green"> {{pro.price}},- </p>
                    <p v-else class="card-text" style="color: red"><s> {{pro.price}},- </s><span class="font-weight-bold">UDSOLGT</span></p>
                            
                    <a v-if="pro.butik == true" href="#" class="btn btn-success mr-1"> KØB </a>
                    <a v-else href="#" class="btn btn-danger disabled mr-1"> KØB </a>

                    <router-link :to="{name: 'DetailComponent', params: { id: pro.id, title: pro.title, img: pro.img, price: pro.price, Description: pro.Description}}" v-bind:key="pro.id" v-if="pro.butik == true" class="btn btn-primary">Information</router-link>
                    <button v-else class="btn btn-primary disabled">Information</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

data () {
    return{
      produkter: [
                { id: 1, Description: 'Mangler du en sofa som både er pæn at kigge på og behagelig at sidde på, så er denne helt nye "Couch" noget for dig, for kun 100 Danske Dollars kan du få den leveret og installeret på samme dag du køber den!', butik: true, title: 'couch', price: 100, img: 'https://www.ikea.com/us/en/images/products/ektorp-sofa-beige__0386819_PE559167_S4.JPG' },
                { id: 2, Description: '', butik: true, title: 'chair', price: 200, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 3, Description: '', butik: true, title: 'chair', price: 300, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 4, Description: '', butik: false, title: 'chair', price: 400, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 5, Description: '', butik: true, title: 'DELUXE CHAIR', price: 500000000, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 6, Description: '', butik: false, title: 'chair', price: 600, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 7, Description: '', butik: true, title: 'chair', price: 700, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 8, Description: '', butik: false, title: 'chair', price: 800, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 9, Description: '', butik: true, title: 'chair', price: 800, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 10, Description: '', butik: true, title: 'chair', price: 800, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 11, Description: '', butik: false, title: 'chair', price: 800, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 12, Description: '', butik: true, title: 'chair', price: 800, img: 'https://www.ikea.com/dk/da/images/products/bjuran-stol-r-d__0658094_PE710159_S4.JPG' },
                { id: 13, Description: 'HAHAH, Gotcha!', butik: true, title: 'test', price: 100000000000000, img: 'https://media.giphy.com/media/kFgzrTt798d2w/giphy.gif' }
            ]
        }
    }
}
</script>

<style scoped>

</style>

