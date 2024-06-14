<template>
  <div class="home">
    <form @submit.prevent>
      <h1>Busque seu cep</h1>
      <label>
        CEP:
        <input v-model="cep" />
        <button @click="getCEP()">Buscar</button>
      </label>
    </form>
  
    <card-address :address="address"/>

  </div>
</template>

<script lang="ts">
import {HomeService} from "./home.service";
import { defineComponent } from "vue";
import { ViaCEP } from "@/model/address.model";
import { pipe } from "rxjs";
export default defineComponent({
  data(){
    return{
      cep:'',
      address: new ViaCEP()
    }
  },
  computed:{
    service(){
      return new HomeService()
    }
  },
  methods:{
    // getCEP(){
    //   this.service.getAddressByIdCEP(this.cep).then((response:ViaCEP)=>this.address=response)
    // }
    getCEP(){
      this.service.address.pipe().subscribe({next:(response)=> this.address = response})
      this.service.getAddressByIdCEP(this.cep)
    }
  }
})
</script>
