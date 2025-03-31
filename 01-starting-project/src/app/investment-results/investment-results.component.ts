import { CurrencyPipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input<number>(); // registers this as an input (signal).
 @Input() results?: {
   year: number;
   interest: number;
   valueEndOfYear: number;
   annualInvestment: number;
   totalInterest: number;
   totalAmountInvested: number;
 }[];
}
