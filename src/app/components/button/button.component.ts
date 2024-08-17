import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
  ],
  templateUrl: './button.component.html',
  styles: ``
})
export class ButtonComponent {

  @Input() text = '';
  @Output() clicked = new EventEmitter(undefined);

  handleClick(): void {
    this.clicked.emit('Jambo!');
  }
}
