// This component will manage the loading of the data using the Stocks service,
// and then display each stock using a copy of the Summary component
import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // Declares a property for holding an array of stocks
  stocks: Array<StockInterface>;
  // Declares a property for holding an array of stock symbols
  symbols: Array<string>;

  // Gets the stock symbols from the service when the component is first constructed.
  // This is a synchronous action that loads a value directly from memory
  // But we don’t load data from the service in the constructor for a number of reasons. We’ll dig into the complexities later in the book
  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  // Implements the ngOnInit method and calls the service to load stock data over Http
  // this is using the ngOnInit lifecycle hook to call the service to load the stock data
  ngOnInit(): void {
    this.service
      .load(this.symbols)
      // This uses the observable approach to handling asynchronous requests
      // HttpClient returns an observable (as a stream of data) for us to receive the response
      // subscribe to wait for the results to return and store them in the stocks property
      .subscribe((stocks) => (this.stocks = stocks));
  }
}
