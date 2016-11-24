import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_PROVIDERS } from './services/index';
import { AppModule } from './app.module';
import 'rxjs/Rx'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, APP_PROVIDERS);
