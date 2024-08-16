import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string): void {
    const el = this.document.getElementById('theme-link') as HTMLLinkElement;
    const file = './dist/' + theme + '.css';

    el?.setAttribute('href', file);
  }
}
