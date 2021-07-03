// This component with forms and events to edit the list of stocks (add, remove)
// This list of stocks is shared throughout the entire application, so any changes will replicate elsewhere.
import { Component } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent {
  // Defines two properties for storing the array of symbols and a string for input.
  symbols: Array<string>;
  stock: string;

  // Gets the current list of symbols during class instantiation
  // The constructor uses the service to get the array of stock symbols and store it on the symbols property.
  // This doesn’t require the OnInit lifecycle hook, because it’s a synchronous request to get data that exists in memory
  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  // Method to add a new stock to the list
  // The add method will add a new item to the list of symbols, and then store the modifed list onto the symbols list
  add(): void {
    this.symbols.push(this.stock.toUpperCase());
    this.stock = '';
  }

  // Method to remove a stock symbol from the list
  // The remove method will remove the item from the array and refresh the symbols list in the controller
  remove(symbol: string): void {
    this.symbols = this.service.remove(symbol);
  }
  // The service always returns a copy of the stocks symbol array, so we have to use the service methods to manage the list,
  // which is encapsulated inside the service and isn’t directly modifiable
}
