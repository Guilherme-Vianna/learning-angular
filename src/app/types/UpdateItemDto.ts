export class UpdateItemDto implements IUpdateItemDto {
    constructor(id: string, barcode: string, code: string, description: string, name: string) {
        this.id = id;
        this.barcode = barcode;
        this.code = code;
        this.description = description;
        this.name = name;
    }
    id: string;
    barcode: string;
    code: string;
    description: string;
    name: string;
}
