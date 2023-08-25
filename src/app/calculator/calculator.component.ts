import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValue: string = '';
  result: number | string = '';

  appendToInput(value: string) {
    this.inputValue += value;
  }

  calculate() {
    try {
      this.result = eval(this.inputValue);
      this.inputValue = this.result.toString(); 
    } catch (error) {
      this.result = 'Error';
    }
  }

  clear() {
    this.inputValue = '';
    this.result = '';
  }

}
