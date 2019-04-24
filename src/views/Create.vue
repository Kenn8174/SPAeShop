<template>
    <div>
        <!--<form action="post">-->
            <div class="col-6">
                <div class="text-left">
                    <div class="form-group">
                        <label class="control-label">Firma:</label>
                        <select v-validate="'included:27,28,29,30,31,32'" name="Company" data-vv-as="selected" v-model="phone.companyID" class="form-control col-6">
                            <option value="1">Vælg</option>
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
                        <input v-validate="'required'" type="text" data-vv-as="Phone Name" name="Name" v-model="phone.phoneName" class="form-control col-6" />
                        <span class="text-danger">{{ errors.first('Name') }}</span>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Pris:</label>
                        <input v-validate="'required|numeric'" data-vv-as="Price" type="text" name="Pris" v-model="phone.price" class="form-control col-6" />
                        <span class="text-danger">{{ errors.first('Pris') }}</span>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Photo:</label>
                        <input v-validate="'required'" type="text" name="Photo" v-model="phone.photo.phonePhoto" class="form-control col-6" />
                        <span class="text-danger">{{ errors.first('Photo') }}</span>
                    </div>
                    <div class="form-group">
                        <router-link to="/Bitcoin" class="btn btn-danger mr-1">Anullere</router-link>
                        <button v-on:click="createPhone(phone)" type="submit" class="btn btn-primary">Opret</button>
                    </div>
                </div>
            </div>
        <!--</form>-->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            phone: {
                companyID: 1,
                phoneName: null,
                photo: {
                    phonePhoto: null
                },
                price: null
            }
        }
    },
    methods: {
        createPhone: function (phone) {
            this.$validator.validate().then(valid => {
                if (valid) {
                    axios
                        .post('http://localhost:60014/api/shop', this.phone)
                        .then(window.location.replace('/Bitcoin'))
                }
            })
        }
    }
}
</script>
