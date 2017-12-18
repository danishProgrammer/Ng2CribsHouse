import { Component, OnInit } from '@angular/core';
import { CribsService } from 'app/services/cribs-service.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
   propertyTypes = ['House','Condo','Duplex'];
  
   constructor(private cribService : CribsService) { }

  ngOnInit() {
  }
  onCribSubmit(data):void{
    console.log(data);
    this.cribService.addCrib(data);
  }

}
