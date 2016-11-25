import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_PROVIDERS } from './services/index';
import { AppModule } from './app.module';
import { MSN_DI_CONFIG } from './app.config';
import 'rxjs/Rx'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, APP_PROVIDERS, MSN_DI_CONFIG);
