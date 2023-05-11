import { InjectionToken } from '@angular/core';
import { Notyf } from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {
  return new Notyf({
      duration: 50000,
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'success',
          background: 'url(https://raw.githubusercontent.com/SweetBabyCheesus/SweetBabyCheesus.kohleTimer.io/54b8ab07e17634a0745942faa1ee027662f6ceb1/assets/images/a.jpg)',
        },
      ]
    });
}