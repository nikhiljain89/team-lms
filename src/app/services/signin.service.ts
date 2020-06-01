import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const users = [
  {
    username: 'user1',
    password: '12345678',
    userId: 1,
  },
  {
    username: 'user2',
    password: '12345678',
    userId: 2,
  },
  {
    username: 'user3',
    password: '12345678',
    userId: 3,
  },
  {
    username: 'user4',
    password: '12345678',
    userId: 4,
  },
];

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor() {}

  authenticate(user): Observable<any> {
    return new Observable((observer) => {
      const isAuthenticatedUser = users.find(
        (u) => user.userName === u.username && user.password === u.password
      );
      observer.next(isAuthenticatedUser);
    });
  }
}
