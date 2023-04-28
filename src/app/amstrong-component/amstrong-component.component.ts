import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amstrong-component',
  templateUrl: './amstrong-component.component.html',
  styleUrls: ['./amstrong-component.component.css']
})
export class AmstrongComponentComponent {
  @Input() number: number = 0;

  Armstrong(): boolean {
    let sum = 0;
    let num = this.number;
    const n = num.toString().length;

    while (num > 0) {
      const digit = num % 10;
      sum += Math.pow(digit, n);
      num = Math.floor(num / 10);
    }

    return sum === this.number;
  }
}
