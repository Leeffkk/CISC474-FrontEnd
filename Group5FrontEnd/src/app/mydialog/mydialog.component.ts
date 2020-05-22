import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface data {
    data : any
}
@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.scss']
})
export class MydialogComponent implements OnInit {

  constructor(@inject(MAT_DIALOG_DATA) public course : data, ) {
    console.log(course);
   }

  ngOnInit(): void {
  }

}
