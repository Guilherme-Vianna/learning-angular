import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Enviroment } from '../../enviroment/Enviroment';
import { Routes } from '../../enviroment/Routes';
import { Observable } from 'rxjs';
import { IItemService } from './interfaces/IItemService';

@Injectable({
  providedIn: 'root',
})
export class ItemService implements IItemService {
  client = inject(HttpClient)

  create(item: ICreateItemDto): Observable<any> {
    return this.client.post(Enviroment.API_URL + Routes.ITEMS, item, {
      keepalive: false,
      cache: "no-cache",
      responseType: 'json',
      timeout: 1000,
    })
  }

  get(id: string): Observable<any> {
    return this.client.get(Enviroment.API_URL + Routes.ITEMS + `/${id}`, {
      keepalive: false,
      cache: "no-cache",
      responseType: 'json',
      timeout: 1000,
    })
  }

  getAllItems(): Observable<IItemViewModelResponse[]> {
    return this.client.get<IItemViewModelResponse[]>(Enviroment.API_URL + Routes.ITEMS, {
      keepalive: false,
      cache: "no-cache",
      responseType: 'json',
      timeout: 1000,
    })
  }

  update(item: IUpdateItemDto): Observable<any> {
    return this.client.put(Enviroment.API_URL + Routes.ITEMS + `/${item.id}`, item, {
      keepalive: false,
      cache: "no-cache",
      responseType: 'json',
      timeout: 1000,
    })
  }
}
