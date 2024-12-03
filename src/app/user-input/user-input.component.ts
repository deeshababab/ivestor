import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate=output<InvestmentInput>();
  initial_investment = signal('0');
  annual_investment = signal('0');
  expected_return = signal('0');
  duration = signal('5');
  constructor(public investmentService:InvestmentService){

  }
  onSubmit() {
    this.investmentService.calculateInvestmentResult({
      initialInvestment: +this.initial_investment(),
      duration: +this.duration(),
      expectedReturn: +this.expected_return(),
      annualInvestment: +this.annual_investment(),
    })
    // this.calculate.emit({
    //   initialInvestment: +this.initial_investment(),
    //   duration: +this.duration(),
    //   expectedReturn: +this.expected_return(),
    //   annualInvestment: +this.annual_investment(),
    // });
    this.initial_investment.set('0');
    this.duration.set('0');
    this.expected_return.set('0');
    this.annual_investment.set('0')
  }
}
