export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  images: string[];
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 12,
    images: ['iphonexl.png']

  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock:12,
    images: ['iphonemini.jpeg']
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    stock: 12,
    images: ['standar.jpeg']
  },
  {
    id: 4,
    name: 'One Phone',
    price: 800,
    description: 'Es como un Iphone pero mas barato',
    stock:12,
    images: ['onePhone.jpg']
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/