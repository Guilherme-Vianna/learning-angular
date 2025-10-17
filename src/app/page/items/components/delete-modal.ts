import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ItemService } from '../../../services/ItemService';

@Component({
  selector: 'delete-modal',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './delete-modal.html',
})
export class DeleteModal {
  readonly itemService: ItemService = inject(ItemService);
  selfClose = output<void>();
  deleteItem = output<void>();

  close() {
    this.selfClose.emit();
  }

  onSubmit() {
    this.deleteItem.emit();
  }
}
