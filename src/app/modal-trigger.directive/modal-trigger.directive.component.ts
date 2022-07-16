import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';
import { SimpleModalComponent } from '../simple-modal/simple-modal.component';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', (e) => {
      this.$('#{this.modalId}').modal({});
    });
  }
}