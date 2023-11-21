import {Component} from '@angular/core';
import {LanguageService} from "src/app/shared/services/language.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../styles/_buttons.scss']
})
export class HomeComponent {

  constructor(private languageService: LanguageService) {
  }


}
