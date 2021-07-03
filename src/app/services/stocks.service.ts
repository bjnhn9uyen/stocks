// Imports dependencies. one is the decorator for a service, and the other is the HttpClient service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// two variables - one is an array that contains a list of the stock symbols , and the other is the API endpoint URL
const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service = 'https://angular2-in-action-api.herokuapp.com';

// this interface is defined and exported for other components to use
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

// The Injectable decorator is used to set up the proper wiring for Angular to know how to use it elsewhere
@Injectable()
export class StocksService {
  // injected using the TypeScript technique of declaring a private variable called http and then giving it a type of HttpClient
  constructor(private http: HttpClient) {}

  get(): Array<string> {
    return stocks;
    // returns the current value of the stocks array, always returns a copy instead of the direct value.
    // This is done to encapsulate the stock values and prevent them from being directly modifed
  }

  add(stock: string): Array<string> {
    stocks.push(stock);
    return this.get();
    // adds a new item to the stocks array and returns the newly modifed value
  }

  remove(stock: string): Array<string> {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
    // drop an item from the stocks array and returns the newly modifed value
  }

  // makes a call to the HttpClient service to load the data for current stock price values.
  load(symbols: any[]): any {
    if (symbols) {
      // The HttpClient service is called and returns an observable,
      // which is a construct for handling asynchronous events, such as data from an API call.
      // Between two angle brackets, is a type variable (feature of TypeScript),
      // tells the http.get() method what type of object it should expect (an array of objects that conform to the StockInterface)
      // This alerts the compiler if you try to access properties that don’t exist
      return this.http.get<Array<StockInterface>>(
        service + '/stocks/snapshot?symbols=' + symbols.join()
      );
    }
  }
}

// The Angular CLI gives us a nice way to create a service that has the scaffolding we need to get started.
// To generate a service (--skipTests is optional): ng generate service /services/service-name --skipTests
// Because the CLI doesn’t automatically register the service with the App module,
// and we need to register HttpClient module with the application as well. Add these two imports in the src/app/app.module.ts file
// import { HttpClientModule } from '@angular/common/http';
// import { ServiceClassName } from './services/service-name.service';
// In the imports section, add 'HttpClientModule', and register the new ServiceClassName with the providers property
// to inform Angular that it should be made available for the module to use.
// In the imports property, we also need to register the HttpClientModule
