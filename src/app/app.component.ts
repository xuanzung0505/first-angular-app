import { Component } from '@angular/core';
import { LocalTranslateService } from './services/local-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';

  constructor(private localTranslateService: LocalTranslateService) {}
}
