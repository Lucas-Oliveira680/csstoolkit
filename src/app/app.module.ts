import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ThemeToggleComponent } from 'src/app/shared/components/theme-toggle/theme-toggle.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { LanguageToggleComponent } from 'src/app/shared/components/language-toggle/language-toggle.component'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/')
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ThemeToggleComponent,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      // useDefaultLang: false,
    }),
    LanguageToggleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
