import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LENGTH_UNITS} from "src/app/shared/data/length-units";

@Component({
  selector: 'app-border-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './border-generator.component.html',
  styleUrl: './border-generator.component.scss'
})
export class BorderGeneratorComponent {
  borderWidth: number = 20;
  borderLengthUnit: string = 'px';
  borderRadiusLengthUnit: string = 'px';

  borderStyle: 'solid' | 'dotted' | 'dashed' = 'solid';
  borderColor: string = '#32ea94';
  borderTopRightRadius: number = 0;
  borderBottomRightRadius: number = 0;
  borderTopLeftRadius: number = 0;
  borderBottomLeftRadius: number = 0;


  get lengthUnits() {
    return LENGTH_UNITS;
  }
}
