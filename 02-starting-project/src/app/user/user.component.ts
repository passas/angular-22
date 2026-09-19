import { Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent
{
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string; // ! -> will be setted elsewhere
  @Input({required: true}) name!: string;

  // avatar = input<string>();              // read-only
  // name = input.required<string>();       // read-only  -- no this.name.set("Miguel");

  @Output() clickUser = new EventEmitter(); // custom property
  //@Output() clickUser = new EventEmitter<string>();

  // clickUser = output<string>();          // this.id is a string...

  get userAvatarPath()
  {
    return '../assets/user/' + this.avatar;
  }

  // userAvatarPath = computed( () => {
  //  return '../assets/user/' + this.avatar;
  // });

  onClickUser()
  {
    this.clickUser.emit(this.id);
  }
}
