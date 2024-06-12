
import CardAddress from "@/components/cardAddress.vue";
import { App } from "vue";

export function setComponent(app:App){
    app.component('card-address', CardAddress)
}