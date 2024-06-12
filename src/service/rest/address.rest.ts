import api from "../config"
export class AddressRest{
    getAddressByIdCEP(cep:string){
       
        return api.get(`/${cep}/json` )
    }
  
}