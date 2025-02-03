import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';
import { IData } from './Interfaces/IData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'BD-Assignment';
  currentLang: string = 'en';
  data!:IData;//interface
  // Pagination properties
  currentPage = 1;
  itemsPerPage = 5; // Number of items to display per page
  totalItems = 0; // Total number of items
  paginatedClients: any[] = []; // Clients to display on the current page

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.dataService.getData().subscribe({
      next:(res)=>{
        this.data = res;
        this.totalItems = this.data.clients.length;
      this.updatePaginatedClients();
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  

  updatePaginatedClients(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedClients = this.data.clients.slice(startIndex, endIndex);
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
