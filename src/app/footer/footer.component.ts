import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  applianceForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl(''),
      pinCode: new FormControl(''),
      address: new FormControl(''),
      itemName: new FormControl(''),
      description: new FormControl(''),
      addImage: new FormControl(''),
      rentPrice: new FormControl(''),
      retailPrice: new FormControl(''),
    }
  )
  furnitureForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl(''),
      pinCode: new FormControl(''),
      address: new FormControl(''),
      itemName: new FormControl(''),
      description: new FormControl(''),
      addImage: new FormControl(''),
      rentPrice: new FormControl(''),
      retailPrice: new FormControl(''),
    }
  )

  applianceList: any = [];
  furnitureList: any = [];

  sendToApplianceSlider() {
    this.applianceList.push(this.applianceForm.value);
    localStorage.setItem('appliancesList', JSON.stringify(this.applianceList));
  }

  sendToFurnitureSlider() {
    this.furnitureList.push(this.furnitureForm.value);
    localStorage.setItem('furnitureList', JSON.stringify(this.furnitureList));
  }


  // adding images for appliance/furniture
  url: any;
  onFileChange(event: any) {
    const files = event.target.files;

    if (files.length === 0)
      return;

    const mimeType = files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();

    // this.imagePath = files;

    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
}
