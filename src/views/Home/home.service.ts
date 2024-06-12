import { AddressRest } from "@/service/rest/address.rest";
import { AxiosResponse } from "axios";
export class HomeService{
    constructor (
        private _address = new AddressRest()
    ){}
    getAddressByIdCEP(cep:string){
       return this._address.getAddressByIdCEP(cep).then((response:AxiosResponse)=>response.data)
    }
}





