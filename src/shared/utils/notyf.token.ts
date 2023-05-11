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
          background: 'url(https://raw.githubusercontent.com/Vanilagy/MarbleBlast/e3a240da58a8a467fea904e8516a6feca71b828d/src/assets/svg/whatshot_black_24dp.svg)',
        },
      ]
    });
}