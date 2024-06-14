import api from "../rxjs"
export class AddressRest{
    getAddressByIdCEP(cep:string){
       
        return api.get(`/${cep}/json` )
    }
  
}