import {Pipe, PipeTransform} from '@angular/core';

const millisecondsInDays = 1000 * 3600 * 24;

const rtf = new (Intl as any).RelativeTimeFormat('en');

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  transform(utcTime: string): string {
    const diffInMilliseconds = new Date(utcTime).getTime() - new Date().getTime();
    const diffInDays = Math.round(diffInMilliseconds / millisecondsInDays);
    return rtf.format(diffInDays, 'day');
  }
}
