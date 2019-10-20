import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://admin.mashable.com/wp-content/uploads/2012/01/600universallogos.jpg';
  image3 = 'https://i.pinimg.com/originals/dc/56/5c/dc565c0092e341628ea11d5d0cbaa829.png';

  constructor() { }

  ngOnInit() {
  }

}