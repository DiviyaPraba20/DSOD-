import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetUserInfo } from '../../../pages/auth/actions/auth.actions';
import { UserInfoPayload } from 'src/app/core/models';

@Component({
  selector: 'dsod-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit {
  isEditMode = false;
  isLoggedIn = false;
  userInfo: UserInfoPayload = {
    details: null,
    authenticated: true,
    email: 'test@email.com'
  };
  profilePanel: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.profilePanel = this.store.select(state => state.auth.isOpenedProfilePanel);

    this.store.select(state => state.auth.isLoggedIn).subscribe(res => {
      console.log(res);
      this.isLoggedIn = res;

      if (this.isLoggedIn) {
        this.store.dispatch(new GetUserInfo(this.userInfo));
      }
    });
  }

}
