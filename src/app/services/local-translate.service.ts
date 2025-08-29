import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import translationsVi from '../../assets/i18n/vi.json';

@Injectable({
  providedIn: 'root',
})
export class LocalTranslateService {
  defaultLang: string = 'en';
  lang: string = 'vi';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setTranslation('vi', translationsVi);
    this.translate.setDefaultLang(this.defaultLang);
    this.translate.use(this.lang);
  }
}
