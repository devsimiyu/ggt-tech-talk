import { createApplication } from '@angular/platform-browser';
import { ApplicationConfig } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { ButtonComponent } from "./app/components/button/button.component";
import { ThemeSwitchComponent } from './app/components/theme-switch/theme-switch.component';

async function bootstrapElements() {

  const config: ApplicationConfig = {
    providers: [],
  };

  const app = await createApplication(config);

  const ggtButton = createCustomElement(ButtonComponent, {
    injector: app.injector,
  });

  customElements.define('ggt-button', ggtButton);

  const ggtTheme = createCustomElement(ThemeSwitchComponent, {
    injector: app.injector,
  });

  customElements.define('ggt-theme', ggtTheme);
}

bootstrapElements();
