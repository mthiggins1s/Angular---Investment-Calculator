import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
@Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment = '0'; // property being binded to ngModel. (in the html).
  enteredAnnualInvestment = '0'; // property being binded to ngModel. (in the html).
  enteredExpectedReturn = '5'; // property being binded to ngModel. (in the html).
  enteredDuration = '10'; // property being binded to ngModel. (in the html).

  onSubmit() {
    this.calculate.emit({
      initialInvestment: + this.enteredInitialInvestment,
      duration: + this.enteredDuration,
      expectedReturn: + this.enteredExpectedReturn,
      annualInvestment: + this.enteredAnnualInvestment
    }) // emit this no matter what. even if you create it or use the output function.
  }
}
