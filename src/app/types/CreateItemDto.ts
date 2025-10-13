export class CreateItemDto implements ICreateItemDto {
  constructor(barcode: string, code: string, description: string, name: string  ) {
    this.barcode = barcode;
    this.code = code;
    this.description = description;
    this.name = name;
  }
  barcode: string;
  code: string;
  description: string;
  name: string;
}
