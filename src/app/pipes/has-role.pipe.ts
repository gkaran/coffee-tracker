import {Pipe, PipeTransform} from '@angular/core';
import {CUser} from '../CUser';

@Pipe({
  name: 'hasRole'
})
export class HasRolePipe implements PipeTransform {

  transform(user: CUser, roles: string[], matchAny: boolean = false): boolean {
    if (!user) {
      return false;
    }

    const userRoles = (user.roles || []);
    for (const role of roles) {
      if (matchAny) {
        if (userRoles.includes(role)) {
          return true;
        }
      } else if (!userRoles.includes(role)) {
        return false;
      }
    }

    return true;
  }

}
