import { Component, inject, input, Input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CreateItemDto } from '../../../types/CreateItemDto';
import { ItemService } from '../../../services/ItemService';

@Component({
  selector: 'create-modal',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-modal.html',
})
export class CreateModal {
  readonly itemService: ItemService = inject(ItemService);
  selfClose = output<void>();

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

  async onSubmit() {
    const newItem = new CreateItemDto(
      this.formulary.value.barcode,
      this.formulary.value.code,
      this.formulary.value.description,
      this.formulary.value.name,
    );
    this.itemService.create(newItem).subscribe(() => {
      this.close();
    });
  }
}
