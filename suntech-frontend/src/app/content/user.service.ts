import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  private userUrl = 'http://localhost:8080/suntech/v1/api/user';

  // private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public getUsersMocado() {
    return this.USER_ELEMENT;
  }

  private USER_ELEMENT: User[] = [
    {
      'id': 1,
      'userName': 'msilva',
      'password': '123',
      'enabled': true,
      'registerDate': new Date(),
      'name': 'Murilo',
      'surName': 'Silva',
      'email': 'murilo.silva@gmail.com',
      'phone': '48991948022'
    },
    {
      'id': 2,
      'userName': 'msilva',
      'password': '123',
      'enabled': true,
      'registerDate': new Date(),
      'name': 'Murilo',
      'surName': 'Silva',
      'email': 'murilo.silva@gmail.com',
      'phone': '48991948022'
    },


  ]

}
