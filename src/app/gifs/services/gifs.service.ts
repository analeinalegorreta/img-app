import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList:Gif[]=[];

  private _tagHistory:string[]=[];
  private apiKey:string='uuxYH6uTnx7BuIYxiG4BhAryFxu3Aix9'
  private serviceUrl:string='http://api.giphy.com/v1/gifs'

  constructor(private http:HttpClient) { }

  get tagHistory(){
    return [...this._tagHistory];
  }


  private organizeHistory(tag:string){
    tag=tag.toLocaleLowerCase();

    if(this._tagHistory.includes(tag)){             /**lo mete al arreglo */
      this._tagHistory=this._tagHistory.filter((oldTag)=>oldTag!=tag)/**en this._tagHistory filtra que no tenga la palabra que metio el usuario y crea una copia y si no tiene la palabra que metio el usuario la mete al principio  */
    }

    this._tagHistory.unshift(tag);  /**lo envia al inicio del arreglo */
    this._tagHistory=this._tagHistory.splice(0,10);/**recorta el arreglo de 0 a 10 */






  }


  searchTag(tag:string){
    if(tag.length===0)return;  /**valida q no venga vacio */
   this.organizeHistory(tag);   /**le asigna la palabra agregada por el usuario una vez q paso por las validacines */

    const params=new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)



   this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
   .subscribe(resp=>{

    this.gifList=resp.data;

   })
  }
}
