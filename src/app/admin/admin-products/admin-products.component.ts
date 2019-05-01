import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:any[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filteredProducts;
  dataSource;
  subscription:Subscription;
  displayedColumns: string[] = ['title', 'price','edit'];

  constructor(private productService:ProductService) {
    this.subscription=productService.getAll().subscribe(p => {
      this.filteredProducts = this.products = p;
      this.dataSource= new MatTableDataSource(this.snapshotToArray(this.filteredProducts));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator=this.paginator;
    });
   }
  filter(query:string){
    this.filteredProducts=this.products;
    this.filteredProducts=(query)?
    this.filteredProducts.filter(p=>p.payload.val()['title'].toLowerCase().includes(query.toLowerCase())):
    this.products;
  }
  
  ngOnInit() {
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.payload.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
