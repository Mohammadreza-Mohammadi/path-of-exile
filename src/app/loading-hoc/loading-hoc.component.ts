import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-loading-hoc',
  templateUrl: './loading-hoc.component.html',
  styleUrls: ['./loading-hoc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingHocComponent implements OnInit {
  @Input() loading = false;
  constructor() {}

  ngOnInit(): void {}
}
