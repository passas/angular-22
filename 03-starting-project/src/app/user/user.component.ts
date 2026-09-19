import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

type User = {
    id: string;
    avatar: string;
    name: string;
  };

//interface User {
//    id: string;
//    avatar: string;
//    name: string;
//  };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent
{
  @Input({required: true}) user!: User;

  @Output() clickUser = new EventEmitter(); // custom property

  get userAvatarPath()
  {
    return '../assets/user/' + this.user.avatar;
  }

  onClickUser()
  {
    this.clickUser.emit(this.user.id);
  }
}
