interface IItemService {
  create(item: ICreateItemDto): Promise<any>
}
