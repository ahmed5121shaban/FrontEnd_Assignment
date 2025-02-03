import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../Interfaces/IData';

@Component({
  selector: 'app-table',
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css']
})
export class TableComponent {

  @Input() clients!: Client[];

  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;
  paginatedClients: any[] = [];

  ngOnChanges(): void {
    this.totalItems = this.clients.length;
    this.updatePaginatedClients();
  }

  updatePaginatedClients(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedClients = this.clients.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedClients();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedClients();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedClients();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}
