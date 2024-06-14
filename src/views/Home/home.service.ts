import { AddressRest } from "@/service/rest/address.rest";
import { BehaviorSubject, Observable, take } from "rxjs";
import { AxiosResponse } from "axios";
export class HomeService {
  constructor(private _address = new AddressRest()) {}
  // getAddressByIdCEP(cep:string){
  //    return this._address.getAddressByIdCEP(cep).then((response:AxiosResponse)=>response.data)
  // }
  private address$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  address: Observable<any> = this.address$.asObservable();
  getAddressByIdCEP(cep:string):void{
    this._address.getAddressByIdCEP(cep).pipe(take(1)).subscribe({
        next: (response: any) => {
          this.address$.next(response);
        },
      });
  }
}
