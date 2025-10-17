import {
  Component,
  computed,
  createEnvironmentInjector,
  effect,
  inject,
  Inject,
  OnInit,
} from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../../services/ItemService';
import { CreateItemDto } from '../../types/CreateItemDto';
import { last, lastValueFrom } from 'rxjs';
import { ItemList } from '../../types/ItemList';
import { signal } from '@angular/core';
import { CreateModal } from './components/create-modal';
import { UpdateModal } from './components/update-modal';
import { MatIconModule } from '@angular/material/icon';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { NgClass } from '@angular/common';
import { DeleteModal } from "./components/delete-modal";
@Component({
  selector: 'item-page',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    CreateModal,
    UpdateModal,
    NgClass,
    DeleteModal
  ],
  templateUrl: './item-page.html',
})
export class ItemPage implements OnInit {
  readonly itemService: ItemService = inject(ItemService);

  createModalOpen = signal(false);
  updateModalOpen = signal(false);
  deleteModalOpen = signal(false);

  columns_displayed: string[] = ['name', 'code', 'description', 'barcode', 'edit'];
  data = signal<ItemList[]>([]);
  isLoading = signal<boolean>(false);
  itemId = signal<string>("");
  itemDeleteId = signal<string>("");

  fetchItems() {
    this.isLoading.set(true);
    this.itemService.getAllItems().subscribe((result) => {
      this.data.set(
        result.map((x) => new ItemList(x.id, x.code, x.name, x.description, x.barcode)),
      );
      this.isLoading.set(false);
    });
  }

  editItem(id: string) {
    this.itemId.set(id)
    this.updateModalOpen.set(true);
  }

  removeItem(id: string) {
    this.itemDeleteId.set(id)
    this.deleteModalOpen.set(true)
  }

  deleteItem() {
    this.itemService.delete(this.itemDeleteId()).subscribe(() => {
      this.fetchItems()
      this.deleteModalOpen.set(false);
    });
  }

  closeCreateModal() {
    this.createModalOpen.set(false);
    this.fetchItems();
  }

  closeDeleteModal() {
    this.deleteModalOpen.set(false);
    this.fetchItems();
  }

  closeUpdateModal() {
    this.updateModalOpen.set(false);
    this.fetchItems();
  }

  ngOnInit(): void {
    this.fetchItems();
  }
}
