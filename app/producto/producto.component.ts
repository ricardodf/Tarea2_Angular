import { Component, OnInit } from '@angular/core';
import { Product } from './Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: Product[];
  productsToShow: Product[];
  searchMessage = '';
  showSearchMessage = false;
  resaltarMayor = false;

  checkedExistentes = false;
  checkedOrden = false;

  constructor() {
    this.productos = [
        new Product(12, 'Smartphone', 'LG', 'Quadcore 3GHz', 12018.5, 5),
        new Product(123, 'Smartwatch', 'Sony', '3GB Ram', 4999.9, 0),
        new Product(34, 'SmartTV', 'Sony', '52 pulgadas, Conexión Wifi', 8999.9, 3)
    ];
    this.productsToShow = [];
    for (const product of this.productos) {
      this.productsToShow.push(product);
    }
  }

  ngOnInit(): void {
  }

  showSearchMessageFunc() {
    this.showSearchMessage = this.searchMessage.length > 0;
  }

  byExistencias() {
    this.checkedExistentes = !this.checkedExistentes;

    this.bySearchBar();
    if (this.checkedExistentes) {
      this.productsToShow = this.productos.filter( (producto) => {
        return producto.existencia > 0;
      });
    }
  }

  byMenorMayor() {
    this.checkedOrden = !this.checkedOrden;

    this.bySearchBar();
    if (this.checkedOrden) {
      this.productsToShow = this.productsToShow.sort((a, b) => {
        return a.precio - b.precio;
      });
    }
  }

  byResaltarMayor3() {
    this.resaltarMayor = !this.resaltarMayor;
  }

  bySearchBar() {
    this.productsToShow = this.productos.filter( (product) => {
      return product.nombre.toUpperCase().includes(this.searchMessage.toUpperCase()) ||
             product.descripcion.toUpperCase().includes(this.searchMessage.toUpperCase());
    });
  }

}
