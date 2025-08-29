import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import translationsVi from '../assets/i18n/vi.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setTranslation('vi', translationsVi);
    this.translate.setDefaultLang('en');
    this.translate.use('vi');
  }
}
