import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-name-modal',
  templateUrl: './update-name-modal.component.html',
  styleUrls: ['./update-name-modal.component.css']
})
export class UpdateNameModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateNameModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
