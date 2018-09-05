import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../content/user.model'

@Pipe({
    name: 'filter'
})
export class UserPipe implements PipeTransform {
    transform(items: User[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.name.toLowerCase().includes(searchText)
            || it.userName.toLowerCase().includes(searchText)
            || it.email.toLowerCase().includes(searchText)
        });
    }
}
