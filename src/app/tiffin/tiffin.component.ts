import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiffin',
  templateUrl: './tiffin.component.html',
  styleUrls: ['./tiffin.component.scss']
})
export class TiffinComponent {

   thali="";
   price="";
   details="";

   isEditBtnClicked=false;
   isUpdateBtnClicked=false;
   selectedIndex='';
   menuList:any=[];

   submit(){
    let menu={
      thali:this.thali,
      price:this.price,
      details:this.details
    }
    this.menuList.push(menu)


  }

}
