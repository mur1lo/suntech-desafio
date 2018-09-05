import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'user-dialog',
    templateUrl: '/user-dialog.component.html',
})
export class UserDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }


    close() {
        this.dialogRef.close();
      }
}
