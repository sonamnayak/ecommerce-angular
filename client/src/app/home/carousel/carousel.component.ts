import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slideIndex: number = 0
  sliderData: Array<{id: number, img: string, title: string, desc: string, desc2: string, bg: string}> = [
    {
        id: 1,
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/cat5.jpg?updatedAt=1685615253129",
        title: "SUMMER SALE",
        desc: "Get your hands on latest trends!",
        desc2: "Avail 30% OFF", 
        bg: "#f2e6d2b3"
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/slide1.jpeg?updatedAt=1685615253262",
        title: "SUMMER SALE",
        desc: "Get your hands on latest trends!",
        desc2: "Avail 30% OFF",
        bg: "#bbebe0"
    },
    {
        id: 3,
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/slide3.png?updatedAt=1685615254334",
        title: "SUMMER SALE",
        desc: "Get your hands on latest trends!",
        desc2: "Avail 30% OFF",
        bg: "#f7d5cf"
    }
  ]

  handleClick(direction: string){
    if(direction === "left") this.slideIndex = this.slideIndex > 0 ? this.slideIndex - 1 : 2
    else this.slideIndex = this.slideIndex < 2 ? this.slideIndex + 1 : 0
  }
}
