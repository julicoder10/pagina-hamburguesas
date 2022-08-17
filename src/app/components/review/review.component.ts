import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviews = [
    {name: 'maria lopez', short: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam animi expedita magnam doloremque laudantium harum.', src: "../../../assets/products/product-1.png"},
    {name: 'john doe', short: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam animi expedita magnam doloremque laudantium harum.', src: "../../../assets/products/product-2.png"},
    {name: 'julian aquino', short: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam animi expedita magnam doloremque laudantium harum.', src: "../../../assets/products/product-3.png"},
  ];

  faQuoteLeft = faQuoteLeft;

  constructor(config: NgbCarouselConfig) { 
    config.interval = 4500;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
