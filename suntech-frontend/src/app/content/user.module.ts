import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDialogComponent} from './user-dialog.component';
import {UserService} from './user.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserDialogComponent],
  entryComponents: [
    UserDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[UserService]
})

export class UserModule {

}
