import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

export class ParseDate {
  static toRelativeTime(date: string): string {
    dayjs.extend(relativeTime);
    dayjs.locale('es');
    return dayjs(date).fromNow();
  }
}
