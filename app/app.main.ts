import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_PROVIDERS } from './services/index';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, APP_PROVIDERS);
