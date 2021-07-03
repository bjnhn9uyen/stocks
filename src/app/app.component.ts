// Import the Component annotation from another module. This block is to import dependencies needed
import { Component } from '@angular/core';
// import { StocksService, StockInterface } from './services/stocks.service';

// Uses a decorator @Component to define this class as a component by accepting an object and its properties (The object is 'AppComponent')
// Decorators always start with the @ symbol, and Angular uses these decorators to understand what type of class has been declared.
// In this case, it’s a component, and Angular will know how to render a component based on this decorator.
// The decorators define what properties can be passed here (selector, templateUrl, styleUrls)
@Component({
  // The selector property declares the HTML selector of the component.
  // That means the component is used in the template by adding an HTML tag <app-root></app-root> (see index.html)
  selector: 'app-root',
  // The templateUrl property declares a link to the template
  templateUrl: './app.component.html',
  // the styleUrls property contains an array of links to any CSS fles that should be loaded for this component.
  styleUrls: ['./app.component.css'],
})

// This class is a component controller (for App component, every component has a component controller)
// The export keyword denotes the file as a module, because the AppComponent class is exported, it can be imported into another module
export class AppComponent {
  // stocks: Array<StockInterface>;
  // constructor(service: StocksService) {
  //   // Using observables to expect that the response will contain a list of stocks
  //   // To use observables, you subscribe to the stream of data and pass a function that will run every time there’s a new piece of data
  //   // When the data loads, it will store it on the stocks property. This is like an event listener, except that it comes in a stream
  //   service.load(['AAPL']).subscribe((stocks) => {
  //     this.stocks = stocks;
  //   });
  // }
  // Because this task is assigned to dashboard component, we don't need it here any more (the import also be removed)
  // And remove the single card (of first value of the stocks array) in the app.component.html
}

// App module :
// There’s at least one module in an application. The Angular CLI generated the module for us, look at it in src/app/app.module.ts
// The App module is the packaging that helps tell Angular what’s available to render

// Bootstrapping the app :
// Start by taking a look at the .angular.json fle. You’ll see an array of apps, and one of the properties is the main property.
// By default, it points to the src/main.ts fle. This means that when the application gets built,
// it will automatically call the contents of the main.ts file as the first set of instructions.

// If you want to create a new component, uses Angular CLI to genereate the component you need to get started.
// Run the following to create a new component (--skipTests is optional): ng generate component component-name --skipTests
// The contents of the component are pretty similar to how the App component appeared originally.
// It contains an empty CSS fle, basic HTML template, test stub, and empty class already initialized with the component annotation.
// After generating a new component, the CLI automatically registers that component with the App module
