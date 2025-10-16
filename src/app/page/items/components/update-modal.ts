import { Component, inject, input, Input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CreateItemDto } from '../../../types/CreateItemDto';
import { ItemService } from '../../../services/ItemService';
import { IItemService } from '../../../services/interfaces/IItemService';
import { UpdateItemDto } from '../../../types/UpdateItemDto';

@Component({
  selector: 'update-modal',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-modal.html',
})
export class UpdateModal implements OnInit {
  readonly itemService: IItemService = inject(ItemService);
  selfClose = output<void>();
  itemId = input.required<string>();

  formulary: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      code: new FormControl(),
      description: new FormControl(),
      barcode: new FormControl(),
    },
    {
      updateOn: 'submit',
    },
  );

  close() {
    console.log('close');
    this.selfClose.emit();
  }

  loadItemData() {
    this.itemService.get(this.itemId()).subscribe(result => {
      this.formulary.patchValue({
        name: result.name,
        code: result.code,
        description: result.description,
        barcode: result.barcode,
      })
    });
  }

  ngOnInit(): void {
    this.loadItemData()
  }

  async onSubmit() {
    const newItem = new UpdateItemDto(
      this.itemId(),
      this.formulary.value.barcode,
      this.formulary.value.code,
      this.formulary.value.description,
      this.formulary.value.name,
    );
    this.itemService.update(newItem).subscribe(() => {
      this.close();
    });
  }
}
