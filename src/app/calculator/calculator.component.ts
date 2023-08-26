import { Component, OnInit } from '@angular/core';
import { Parser } from 'expr-eval';
import Swal from 'sweetalert2';

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
  parser = new Parser();

  appendToInput(value: string) {
    this.inputValue += value;
  }


  calculate() {
    try {
      const expr = this.parser.parse(this.inputValue);
      this.result = expr.evaluate();
      this.inputValue = this.result.toString();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid expression'
      });
      this.result = 'Error';
    }
  }

  clear() {
    this.inputValue = '';
    this.result = '';
  }
}
