import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-burger-info',
  templateUrl: './burger-info.component.html',
  styleUrls: ['./burger-info.component.scss']
})
export class BurgerInfoComponent implements OnInit {

  images = [
    {title: 'special burger', short: 'First Slide Short', src: "../../../assets/products/product-1.png"},
    {title: 'special burger', short: 'Second Slide Short', src: "../../../assets/products/product-2.png"},
    {title: 'special burger', short: 'Third Slide Short', src: "../../../assets/products/product-3.png"},
    {title: 'special burger', short: 'First Slide Short', src: "../../../assets/products/product-4.png"},
    {title: 'special burger', short: 'Second Slide Short', src: "../../../assets/products/product-5.png"},
    {title: 'special burger', short: 'Third Slide Short', src: "../../../assets/products/product-6.png"}
  ];

  constructor(config: NgbCarouselConfig) { 
    config.interval = 4500;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
