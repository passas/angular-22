import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CardComponent } from '../shared/card/card.component';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent
{
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
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
