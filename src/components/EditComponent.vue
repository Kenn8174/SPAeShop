<template>
    <div>
        <div class="col-6">
            <div class="text-left">
                <div class="form-group">
                    <label class="control-label">Firma:</label>
                    <select v-validate="'included:27,28,29,30,31,32'" name="Company" data-vv-as="selected" v-model="phone1.companyID" class="form-control col-6">
                        <option value="27">Apple</option>
                        <option value="28">Samsung</option>
                        <option value="29">Sony</option>
                        <option value="30">OnePLus</option>
                        <option value="31">LG</option>
                        <option value="32">Nokia</option>
                    </select>
                    <span class="text-danger">{{ errors.first('Company') }}</span>
                </div>
                <div class="form-group">
                    <label class="control-label">Telefon navn:</label>
                    <input v-validate="'required'" type="text" data-vv-as="Phone Name" name="Name" v-model="phone1.phoneName" class="form-control col-6" />
                    <span class="text-danger">{{ errors.first('Name') }}</span>
                </div>
                <div class="form-group">
                    <label class="control-label">Pris:</label>
                    <input v-validate="'required|numeric'" data-vv-as="Price" type="text" name="Pris" v-model="phone1.price" class="form-control col-6" />
                    <span class="text-danger">{{ errors.first('Pris') }}</span>
                </div>
                <div class="form-group">
                    <label class="control-label">Photo:</label>
                    <input v-validate="'required'" type="text" name="Photo" v-model="phone1.photo.phonePhoto" class="form-control col-6" />
                    <span class="text-danger">{{ errors.first('Photo') }}</span>
                </div>
                <div class="form-group">
                    <router-link to="/Bitcoin" class="btn btn-danger mr-1">Anullere</router-link>
                    <button v-on:click="edit()" type="submit" class="btn btn-primary">Redigere</button>
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
            phone1: {
                companyID: null,
                phoneName: null,
                price: null,
                photo: {
                    phonePhoto: null
                }
            }
        }
    },
    methods: {
        edit: function () { 
            this.$validator.validate().then(valid => {
            if (valid) {
                axios
                    .put(`http://localhost:60014/api/shop/${this.$route.params.id}`, this.phone1)
                    .then(window.location.replace('/Bitcoin'))
                }
            })
        }
    }
}
</script>
