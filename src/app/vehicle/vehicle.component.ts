import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'newCrud';
  vtype = '';
  dtype='';
  vmodel ='';
  vcity = '';
  vprice = '';
  vdetails = '';
  vimage = '';
  selectedIndex = '';
  isEditBtnClicked = "no";
  
  
  userList:any = []
  

  submit(){
    let user ={
      vtype:this.vtype,
      vmodel:this.vmodel,
      vcity:this.vcity,
      vprice:this.vprice,
      vdetails:this.vdetails,
      vimage:this.vimage,
      dtype:this.dtype
      }
      this.userList.push(user)
      this.clear()
  }

  clear(){
    this.vtype="";
    this.vmodel="";
    this.vcity="";
    this.vprice="";
    this.vdetails="";
    this.vimage="";
    this.dtype=""
  }
  delete(idx:any){
    console.log('idx',idx);
    this.userList.splice(idx,1);

  }
  edit(idx:any){
    this.isEditBtnClicked="yes";
    this.selectedIndex = idx;
    this.vtype=this.userList[idx].vtype;
    this.vmodel=this.userList[idx].vmodel;
    this.vcity=this.userList[idx].vcity;
    this.vprice=this.userList[idx].vprice;
    this.vdetails=this.userList[idx].vdetails;
    this.vimage=this.userList[idx].vimage;
    this.dtype=this.userList[idx].dtype;
  }
  update(){
    this.userList[this.selectedIndex].vtype = this.vtype;
    this.userList[this.selectedIndex].vtype = this.dtype;
    this.userList[this.selectedIndex].vmodel = this.vmodel;
    this.userList[this.selectedIndex].vcity = this.vcity;
    this.userList[this.selectedIndex].vprice = this.vprice;
    this.userList[this.selectedIndex].vdetails = this.vdetails;
    this.userList[this.selectedIndex].vimage = this.vimage;
    this.clear();
    this.isEditBtnClicked="no";
  }

}
