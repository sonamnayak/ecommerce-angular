import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment'
import { ProductsData } from '../models/products-data.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private client: HttpClient) {}
  productsData: any = [
    {
      img: "https://www.jiomart.com/images/product/500x630/rvr4ypur5d/stylum-women-orange-bandhni-cotton-ethnic-wear-sets-xl-product-images-rvr4ypur5d-0-202207152238.jpg",
      cat: "ethnic",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://www.jiomart.com/images/product/500x630/rvznwsfg8m/yufta-magenta-ethnic-motifs-ethnic-maxi-dress-product-images-rvznwsfg8m-0-202205211937.jpg",
      cat: "ethnic",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    },
    {
      img: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw541c3e85/images/hires/SS22/ss22iti651drry_2_.jpg?sw=562&sh=843&sm=fit",
      cat: "ethnic",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0105/1426/8260/products/red_sheath_cocktail_dress_6.jpg?v=1571914947",
      cat: "western",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://i.pinimg.com/550x/36/f8/38/36f83801951bee90fe9568dfc2918534.jpg",
      cat: "western",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://img.perniaspopupshop.com/catalog/product/a/s/ASRA072171_1.jpg?impolicy=listingimagenew",
      cat: "western",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://image.clovia.com/media/clovia-images/images/275x412/clovia-picture-activewear-ankle-length-tights-in-navy-604658.jpg",
      cat: "active wear",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://i.pinimg.com/originals/e5/f4/5d/e5f45d157793622921c16aada492450e.jpg",
      cat: "active wear",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://img.ltwebstatic.com/images3_pi/2020/03/05/1583391556568a0582e7b3974f6a46389df1bfb1a5.webp",
      cat: "active wear",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    },
    {
      img: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013054329_437Wx649H_202205071228161.jpeg",
      cat: "handbags",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20220704/ZPCe/62c29424aeb26921af5d6517/lafille_black_sling_bag_with_adjustable_strap.jpg",
      cat: "handbags",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19249752/2022/7/26/a2592c42-a4d9-47a8-a6c7-16f6cc6552911658817206257ShoetopiaBlackBlockPumps1.jpg",
      cat: "heels",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0070/8853/7651/products/07401-3982_1_59199aec-6d93-4213-bef2-c8ba602c98c3_500x750_crop_center.jpg?v=1663580632",
      cat: "heels",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/he9/h3b/15204310941726/-473Wx593H-460550755-silver-MODEL.jpg",
      cat: "sunglasses",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    },
    {
      img: "https://cdn-img.prettylittlething.com/9/3/c/8/93c87a2b4d0f6c5e74ba426224454aa0b1527fe8_clv3938_1.jpg?imwidth=400",
      cat: "sunglasses",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: true
    },
    {
      img: "https://m.media-amazon.com/images/I/61l5iH-gSyL._SL1500_.jpg",
      cat: "skincare",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    },
    {
      img: "https://media.allure.com/photos/61e7446cc5657c7529c47626/1:1/w_1750,h_1750,c_limit/Cetaphil%20Daily%20Hydrating%20Lotion.jpg",
      cat: "skincare",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/cd7/3ac/40083bd2740ca332d438936bdc1d2a5691-la-roche-posay-mat.rsquare.w600.jpg",
      cat: "skincare",
      title: "Lorem Ipsum", 
      price: 100,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      colors: ["Black", "Red", "White", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      bestseller: false
    }
  ]

  getProducts(): Observable<ProductsData[]> {
    return this.client.get<ProductsData[]>(env.apiAddress + '/products')
  }

  getProduct(id: any): Observable<ProductsData> {
    return this.client.get<ProductsData>(env.apiAddress + '/products/product/' + id)
  }
}

// [
//   {
//       "_id": "64875cfdfbaedc9a64b0dee4",
//       "img": "https://www.jiomart.com/images/product/500x630/rvr4ypur5d/stylum-women-orange-bandhni-cotton-ethnic-wear-sets-xl-product-images-rvr4ypur5d-0-202207152238.jpg",
//       "cat": "ethnic",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T17:59:25.752Z",
//       "updatedAt": "2023-06-12T17:59:25.752Z"
//   },
//   {
//       "_id": "64875d11fbaedc9a64b0dee7",
//       "img": "https://www.jiomart.com/images/product/500x630/rvznwsfg8m/yufta-magenta-ethnic-motifs-ethnic-maxi-dress-product-images-rvznwsfg8m-0-202205211937.jpg",
//       "cat": "ethnic",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": false,
//       "createdAt": "2023-06-12T17:59:45.299Z",
//       "updatedAt": "2023-06-12T17:59:45.299Z"
//   },
//   {
//       "_id": "64875d65fbaedc9a64b0deea",
//       "img": "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw541c3e85/images/hires/SS22/ss22iti651drry_2_.jpg?sw=562&sh=843&sm=fit",
//       "cat": "ethnic",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": false,
//       "createdAt": "2023-06-12T18:01:09.597Z",
//       "updatedAt": "2023-06-12T18:01:09.597Z"
//   },
//   {
//       "_id": "64875d8bfbaedc9a64b0deec",
//       "img": "https://cdn.shopify.com/s/files/1/0105/1426/8260/products/red_sheath_cocktail_dress_6.jpg?v=1571914947",
//       "cat": "western",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:01:47.519Z",
//       "updatedAt": "2023-06-12T18:01:47.519Z"
//   },
//   {
//       "_id": "64875daafbaedc9a64b0deee",
//       "img": "https://i.pinimg.com/550x/36/f8/38/36f83801951bee90fe9568dfc2918534.jpg",
//       "cat": "western",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:02:18.373Z",
//       "updatedAt": "2023-06-12T18:02:18.373Z"
//   },
//   {
//       "_id": "64875dc9fbaedc9a64b0def0",
//       "img": "https://img.perniaspopupshop.com/catalog/product/a/s/ASRA072171_1.jpg?impolicy=listingimagenew",
//       "cat": "western",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:02:49.936Z",
//       "updatedAt": "2023-06-12T18:02:49.936Z"
//   },
//   {
//       "_id": "64875de7fbaedc9a64b0def2",
//       "img": "https://image.clovia.com/media/clovia-images/images/275x412/clovia-picture-activewear-ankle-length-tights-in-navy-604658.jpg",
//       "cat": "active wear",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:03:19.575Z",
//       "updatedAt": "2023-06-12T18:03:19.575Z"
//   },
//   {
//       "_id": "64875e42fbaedc9a64b0def4",
//       "img": "https://i.pinimg.com/originals/e5/f4/5d/e5f45d157793622921c16aada492450e.jpg",
//       "cat": "active wear",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:04:50.399Z",
//       "updatedAt": "2023-06-12T18:04:50.399Z"
//   },
//   {
//       "_id": "64875e7cfbaedc9a64b0def6",
//       "img": "https://img.ltwebstatic.com/images3_pi/2020/03/05/1583391556568a0582e7b3974f6a46389df1bfb1a5.webp",
//       "cat": "active wear",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": false,
//       "createdAt": "2023-06-12T18:05:48.939Z",
//       "updatedAt": "2023-06-12T18:05:48.939Z"
//   },
//   {
//       "_id": "64875e9efbaedc9a64b0def8",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013054329_437Wx649H_202205071228161.jpeg",
//       "cat": "handbags",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": false,
//       "createdAt": "2023-06-12T18:06:22.097Z",
//       "updatedAt": "2023-06-12T18:06:22.097Z"
//   },
//   {
//       "_id": "64875eb9fbaedc9a64b0defa",
//       "img": "https://assets.ajio.com/medias/sys_master/root/20220704/ZPCe/62c29424aeb26921af5d6517/lafille_black_sling_bag_with_adjustable_strap.jpg",
//       "cat": "handbags",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:06:49.355Z",
//       "updatedAt": "2023-06-12T18:06:49.355Z"
//   },
//   {
//       "_id": "64875edefbaedc9a64b0defc",
//       "img": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19249752/2022/7/26/a2592c42-a4d9-47a8-a6c7-16f6cc6552911658817206257ShoetopiaBlackBlockPumps1.jpg",
//       "cat": "heels",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:07:26.455Z",
//       "updatedAt": "2023-06-12T18:07:26.455Z"
//   },
//   {
//       "_id": "64875efdfbaedc9a64b0defe",
//       "img": "https://cdn.shopify.com/s/files/1/0070/8853/7651/products/07401-3982_1_59199aec-6d93-4213-bef2-c8ba602c98c3_500x750_crop_center.jpg?v=1663580632",
//       "cat": "heels",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:07:57.747Z",
//       "updatedAt": "2023-06-12T18:07:57.747Z"
//   },
//   {
//       "_id": "64875f1dfbaedc9a64b0df00",
//       "img": "https://assets.ajio.com/medias/sys_master/root/he9/h3b/15204310941726/-473Wx593H-460550755-silver-MODEL.jpg",
//       "cat": "sunglasses",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": false,
//       "createdAt": "2023-06-12T18:08:29.723Z",
//       "updatedAt": "2023-06-12T18:08:29.723Z"
//   },
//   {
//       "_id": "64875f36fbaedc9a64b0df02",
//       "img": "https://cdn-img.prettylittlething.com/9/3/c/8/93c87a2b4d0f6c5e74ba426224454aa0b1527fe8_clv3938_1.jpg?imwidth=400",
//       "cat": "sunglasses",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": true,
//       "createdAt": "2023-06-12T18:08:54.322Z",
//       "updatedAt": "2023-06-12T18:08:54.322Z"
//   },
//   {
//       "_id": "64875f7ffbaedc9a64b0df04",
//       "img": "https://pyxis.nymag.com/v1/imgs/cd7/3ac/40083bd2740ca332d438936bdc1d2a5691-la-roche-posay-mat.rsquare.w600.jpg",
//       "cat": "skincare",
//       "title": "Lorem Ipsum",
//       "price": 100,
//       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//       "colors": [
//           "Black",
//           "Red",
//           "White",
//           "Blue"
//       ],
//       "sizes": [
//           "XS",
//           "S",
//           "M",
//           "L",
//           "XL"
//       ],
//       "bestseller": false,
//       "createdAt": "2023-06-12T18:10:07.512Z",
//       "updatedAt": "2023-06-12T18:10:07.512Z"
//   }
// ]