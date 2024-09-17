import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true
  };

  items = [
    { title: 'Item 1', imageUrl: '../../../assets/images/carousel-1.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
