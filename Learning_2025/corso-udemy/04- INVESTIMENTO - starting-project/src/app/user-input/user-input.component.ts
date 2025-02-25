import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../invstment.service';

@Component({
  selector: 'app-user-input',
  
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  /**
   * Usiamo il TwoWayBinding per ottenere i valori inseriti dall'utente tramite evetBinding ()
   * ma anche perché ci permette di popolare con i vlaori iniziai i campi del form tramite la proprietà ngModel
   */
  enteredInitialInvestment = '0'; 
  enteredAnnualInterest = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  //@Output() calculate = new EventEmitter<InvestmentInput>(); 

  constructor(private investmentService: InvestmentService) { }

  onSubmit(){
    console.log('Form submitted!' );
    console.log('Initial Investment: ' + this.enteredInitialInvestment);
    console.log('Annual Interest: ' + this.enteredAnnualInterest);
    console.log('Expected Return: ' + this.enteredExpectedReturn);
    console.log('Duration: ' + this.enteredDuration);
    this.investmentService.CalculateInvestmentResults({        
        initialInvestment: +this.enteredInitialInvestment,
        annualInvestment: +this.enteredAnnualInterest,
        expectedReturn: +this.enteredExpectedReturn,
        duration: +this.enteredDuration
  })
  }







}
