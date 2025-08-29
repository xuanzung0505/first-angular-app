import { Component } from '@angular/core';
import { LocalTranslateService } from './services/local-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';
  currentLanguage: string = 'en';
  languages: string[] = [];

  constructor(private localTranslateService: LocalTranslateService) {
    this.languages = localTranslateService.languages;
    this.currentLanguage = localTranslateService.getCurrentLanguage();
  }

  changeCurrentLang = (event: Event) => {
    const selectEl = event.target as HTMLSelectElement;
    this.localTranslateService.changeCurrentLanguage(selectEl.value);
  };
}
