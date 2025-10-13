import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Enviroment} from '../../enviroment/Enviroment';
import {Routes} from '../../enviroment/Routes';

@Injectable({
  providedIn: 'root',
})
export class ItemService implements IItemService {
  client = inject(HttpClient)

  async create(item: ICreateItemDto): Promise<any> {

    this.client.post(Enviroment.API_URL + Routes.ITEMS, item, {
      keepalive: false,
      cache: "no-cache",
      responseType: 'json',
      timeout: 1000,
    })
    .subscribe(config => {
      console.log(config);
    });

    return Promise.resolve(undefined);
  }
}
