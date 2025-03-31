import { Component, output, signal } from '@angular/core';
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
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0'); // property being binded to ngModel WITH SIGNALS. (in the html).
  enteredAnnualInvestment = signal('0'); // property being binded to ngModel WITH SIGNALS. (in the html).
  enteredExpectedReturn = signal('5'); // property being binded to ngModel WITH SIGNALS. (in the html).
  enteredDuration = signal('10'); // property being binded to ngModel WITH SIGNALS. (in the html).

  onSubmit() {
    this.calculate.emit({
      initialInvestment: + this.enteredInitialInvestment(),
      duration: + this.enteredDuration(),
      expectedReturn: + this.enteredExpectedReturn(),
      annualInvestment: + this.enteredAnnualInvestment()
    }) // emit this no matter what. even if you create it or use the output function.
  }
}
