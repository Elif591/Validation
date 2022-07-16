import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;
  ngOnInit(): void {}

  closeModal() {
    //$().modal('hide');
  }
}
