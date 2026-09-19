import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*selectedUser = DUMMY_USERS[randomIndex];

  get userAvatarPath()
  {
    return '../assets/user/' + this.selectedUser.avatar;
  }

  onClickUser()
  {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }*/
 selectedUser = signal(DUMMY_USERS[randomIndex]);

  /*get userAvatarPath()
  {
    return '../assets/user/' + this.selectedUser().avatar;
  }*/
  userAvatarPath = computed(() => '../assets/user/' + this.selectedUser().avatar);

  onClickUser()
  {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
