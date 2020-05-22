import { Component, OnInit, Inject } from '@angular/core';
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

  item: any[] = [ ];
  constructor(@Inject(MAT_DIALOG_DATA) public course : data ) {
    //console.log(course.data[0]._id);
    this.item = course.data;
    //this.item = []
   }

  ngOnInit(): void {
  }

}
