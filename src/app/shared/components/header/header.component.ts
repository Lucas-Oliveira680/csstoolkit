import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeToggleComponent} from "src/app/shared/components/theme-toggle/theme-toggle.component";
import {LanguageToggleComponent} from "src/app/shared/components/language-toggle/language-toggle.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, LanguageToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
