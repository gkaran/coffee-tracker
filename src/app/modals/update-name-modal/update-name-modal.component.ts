import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-name-modal',
  templateUrl: './update-name-modal.component.html',
  styleUrls: ['./update-name-modal.component.css']
})
export class UpdateNameModalComponent implements OnInit {

  public displayName: string;

  constructor(public dialogRef: MatDialogRef<UpdateNameModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.displayName = this.data.displayName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
