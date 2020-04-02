import { Mail } from './../../interfaces/Mail';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'mailFilter'
})

export class MailFilterPipe implements PipeTransform {
    transform(mails: Mail[], searchParameter: string): Mail[] {
        if (!mails || !searchParameter) {
            return mails;
        }

        return mails.filter(mail =>
            mail.subject.toLowerCase().indexOf(searchParameter.toLowerCase()) !== -1 )
    }
}
