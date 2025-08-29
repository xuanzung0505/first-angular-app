import { NgModule } from '@angular/core';
import {
  TranslateDirective,
  TranslateModule,
  TranslatePipe,
} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule.forRoot({ defaultLanguage: 'en' }),
    TranslatePipe,
    TranslateDirective,
  ],
  exports: [TranslateModule, TranslatePipe, TranslateDirective],
})
export class TranslationModule {}
