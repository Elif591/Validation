import { Injectable, InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Tosatr>('toastr');

export interface Tosatr {
  success(message: string, title?: string | undefined): void;

  info(message: string, title?: string): void;

  warning(message: string, title?: string): void;

  error(message: string, title?: string): void;
}
