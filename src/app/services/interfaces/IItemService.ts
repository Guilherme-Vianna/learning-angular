import { Observable } from "rxjs"

export interface IItemService {
  create(item: ICreateItemDto): Observable<any>
  update(item: IUpdateItemDto): Observable<any>
  getAllItems(): Observable<IItemViewModelResponse[]>
  get(id: string): Observable<IItemViewModelResponse>
}
