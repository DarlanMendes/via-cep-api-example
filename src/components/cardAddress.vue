<template>
    <section class="container">
        <article v-if="address?.cep" class="card">
            <p> Cep: {{ address?.cep }}</p>
            <p> Complemento: {{ address?.complemento }}</p>
            <p> Bairro: {{ address?.bairro }}</p>

        </article>
        <article v-else>
            <h1> Faça a busca do cep para exibir as infromações aqui</h1>
        </article>
    </section>

</template>
<script lang="ts">
import { ViaCEP } from "./../model/address.model"
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        address: ViaCEP
    }
})
</script>
<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

    .card {
        border: 1px solid black;
        max-width: 400px;
        padding: 20px;
        border-radius: 8px;
    }
}
</style>