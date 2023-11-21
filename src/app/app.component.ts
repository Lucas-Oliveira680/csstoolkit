import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ThemeService } from 'src/app/shared/services/theme.service'
import { LanguageService } from 'src/app/shared/services/language.service'
import { EBreakpoints } from 'src/app/shared/types/breakpoints.enum'
import { Router } from '@angular/router'
import { ToastService } from 'src/app/shared/services/toast.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('toastContainer', { read: ViewContainerRef }) toastContainer!: ViewContainerRef

  constructor(
    private _languageService: LanguageService,
    private _themeService: ThemeService,
    private elementRef: ElementRef
  ) {}



  get currentTheme() {
    return this._themeService.currentTheme()
  }

  ngOnInit() {
    const themeInLocalStorage = this._themeService.getTheme()
    const browserLanguage = navigator.language
    const languageInLocalStorage = this._languageService.getLanguage()

    if (themeInLocalStorage) {
      this._themeService.updateTheme(themeInLocalStorage)
    } else {
      this._themeService.updateTheme('dark')
    }

    if (languageInLocalStorage) {
      this._languageService.setLanguage(languageInLocalStorage)
    } else {
      if (browserLanguage === 'pt-BR') {
        this._languageService.setLanguage('pt-br')
      } else {
        this._languageService.setLanguage('en')
      }
    }
  }
  title = "csstoolkit"
}
