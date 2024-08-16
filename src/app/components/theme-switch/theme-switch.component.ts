import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';

import { InputSwitchModule } from 'primeng/inputswitch';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputSwitchModule,
  ],
  templateUrl: './theme-switch.component.html',
  styles: ``
})
export class ThemeSwitchComponent implements OnInit {

  formControl = new FormControl<boolean>(false);

  private destroyRef$ = inject(DestroyRef);

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(filter(val => val !== null), takeUntilDestroyed(this.destroyRef$))
      .subscribe(val => this.toggleTheme(val))
  }

  private toggleTheme(val: boolean): void {
    const theme = val ? 'ggt-dark-theme' : 'ggt-light-theme';

    this.themeService.switchTheme(theme);
  }
}
