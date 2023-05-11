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
          background: 'url(https://raw.githubusercontent.com/SweetBabyCheesus/SweetBabyCheesus.kohleTimer.io/9dab1c7e5e041f4046f0a95c564b4ed026dfb200/assets/images/c.jpg)',
        },
      ]
    });
}