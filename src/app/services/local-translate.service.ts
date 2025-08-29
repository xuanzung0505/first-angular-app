import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import translationsVi from '../../assets/i18n/vi.json';

@Injectable({
  providedIn: 'root',
})
export class LocalTranslateService {
  languages: string[] = ['en', 'vi'];
  defaultLang: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages);
    this.translate.setTranslation('vi', translationsVi);
    this.translate.setDefaultLang(this.defaultLang);
  }

  getCurrentLanguage = () => this.translate.currentLang;

  changeCurrentLanguage = (toLang: string) => {
    this.translate.use(toLang);
  };
}
