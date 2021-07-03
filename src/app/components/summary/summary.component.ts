// This component will only receive data to display from its parent component and modify its own display based on that input value.
// For example, a 'parent component' will pass along the current data for a particular stock,
// and the 'Summary component' will use the daily change to determine whether the background should be green or red
// based on whether the stock went up or down.
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  styleUrls: ['./summary.component.css'],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  // @Input annotation indicates that this property is to be provided to the component by a 'parent' component passing it to the 'summary'
  // The 'parent' component is dashboard component (look for '<app-summary [stock]="stock"></app-summary>' in dashboard.component.html)
  // The input "stock" is passed through a binding attribute [stock], and pass it into this property for the Summary component to consume.
  @Input() stock: any;

  // These two methods are used by the [ngClass] directive in summary.component.html

  isNegative(): boolean {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive(): boolean {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
}

// The key goals of this component are to do the following:
// ► Accept stock data and display it (doing it in this .ts file)
// ► Change background color depending on the day’s activity - green for increase, red for decrease (doing it in this .html file)
// ► Format values for proper display, such as currency or percentage values (doing it in this .html file)
