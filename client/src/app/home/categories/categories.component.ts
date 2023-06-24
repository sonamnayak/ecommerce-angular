import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  category!: string | null
  constructor(private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute) {}
  categoriesData: Category[]= [
    {
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/cat1.png?updatedAt=1685615254786",
        title: "ETHNIC WEAR",
        cat: "ethnic"
    }, 
    {
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/cat2.jpg?updatedAt=1685615252962",
        title: "WESTERN WEAR",
        cat: "western"
    },
    {
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/cat3.png?updatedAt=1685615253242",
        title: "ACTIVE WEAR",
        cat: "active wear"
    },
    {
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/cat4.png?updatedAt=1685615254798",
        title: "BAGS & HEELS",
        cat: "handbags"
    },
    {
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/cat5.jpg?updatedAt=1685615253129",
        title: "GLASSES",
        cat: "sunglasses"
    },
    {
        img: "https://ik.imagekit.io/w5ayb7mdf/assets/cat6.png?updatedAt=1685615254859",
        title: "SKINCARE & BEAUTY",
        cat: "skincare"
    }
  ]

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get("cat")
    this.categoriesService.getCategoriesData().subscribe(res => {
      if(res.length !== 0) this.categoriesData = res
    })
  }
}
