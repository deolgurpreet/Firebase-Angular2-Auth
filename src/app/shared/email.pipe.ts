import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})

export class EmailPipe implements PipeTransform {

  transform(args: string): boolean {
    return this.validateEmail(args);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
