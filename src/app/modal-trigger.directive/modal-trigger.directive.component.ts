import { Directive, ElementRef, Inject, Input, OnInit, Pipe } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';


@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) public $: any) {
    this.el = ref.nativeElement; //dom nesnesine basvuruyu tutar
  }

  ngOnInit(): void {
    this.el.addEventListener('click', (e) => {
       this.$(`#${this.modalId}`).modal({});

    });
  }
}
