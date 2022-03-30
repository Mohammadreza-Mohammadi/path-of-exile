import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error-handling-hoc',
  templateUrl: './error-handling-hoc.component.html',
  styleUrls: ['./error-handling-hoc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorHandlingHocComponent implements OnInit {
  @Input() error: any | undefined = null;
  @Output() retry = new EventEmitter<void>();
  options: AnimationOptions = {
    path: '/assets/95640-boy-looking-error.json',
  };

  constructor() {}

  ngOnInit(): void {}
}
