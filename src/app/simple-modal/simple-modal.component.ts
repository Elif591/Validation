import { JQ_TOKEN } from '../jQuery.service';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';


@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick : string;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}
  ngOnInit(): void {}

  closeModal() {
    if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
     this.$(this.containerEl.nativeElement).modal('show');
    }

  }
}
