import { Component, OnInit } from '@angular/core';
import { MarsphotoviewerService } from './service/marsphotoviewer.service';
import { IImageDetails } from './models/IImageDetails';

@Component({
  selector: 'app-marsphotosviewer',
  templateUrl: './marsphotosviewer.component.html',
  styleUrls: ['./marsphotosviewer.component.css']
})
export class MarsphotosviewerComponent implements OnInit {
  imagedetails: IImageDetails;
  earthDate: string;
  constructor(private photoService:MarsphotoviewerService) { }

  ngOnInit() {
      }
  
  getPhotos(){
    this.photoService.getPhotos(this.earthDate).subscribe(photo=>{this.imagedetails=photo;});

  }
}
