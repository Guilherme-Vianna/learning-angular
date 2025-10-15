export class ItemList {
    constructor(id: string, code: string, name: string, description: string, barcode: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.barcode = barcode;
        this.code = code;
    }

    id: string;
    name: string;
    code: string;
    description: string;
    barcode: string;
}
