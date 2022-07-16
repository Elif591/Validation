import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared/event.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-createsesson',
  templateUrl: './createsesson.component.html',
  styleUrls: ['./createsesson.component.css'],
})
export class CreateSessionComponent implements OnInit {
  constructor() {}
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWords(['foo', 'bar', 'hello', 'elif']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  private restrictedWords(words: any) {
    debugger;
    return (control: FormControl) => {
      if (!words) return null;
      var invalidWords = words
        .map((w: any) => (control.value.includes(w) ? w : null))
        .filter((w: any) => w != null);
      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords.join(',') }
        : null;
    };
  }

  saveSession(formValues: ISession) {
    let session: ISession = {
      id: 0,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
