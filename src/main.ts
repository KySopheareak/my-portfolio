import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app-component/app.config';
import { AppComponent } from './app/app-component/components/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
