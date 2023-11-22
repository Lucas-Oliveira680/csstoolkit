import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss'
})
export class ToolComponent {
  @Input() name: string = '';
  @Input() icon: string = '';

}
