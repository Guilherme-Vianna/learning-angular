import { Observable } from "rxjs"

export interface IItemService {
  create(item: ICreateItemDto): Observable<any>
  getAllItems(): Observable<IItemViewModelResponse[]>
}
