import { InjectionToken } from '@angular/core';
import { Notyf } from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {
  return new Notyf({
      duration: 1000000,
      position: {
        x: 'right',
        y: 'bottom',
      },
      types: [
        {
          type: 'success',
          
        },
      ]
    });
}