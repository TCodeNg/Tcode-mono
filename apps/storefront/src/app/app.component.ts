import { Component } from '@angular/core';
import { Image } from 'libs/api-interface/src/lib/image';

@Component({
  selector: 'tcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 't-Code';
 
  images: Image[] = [
    {
      id: 'x',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1543327573/business-3335725_1920_vekfpb.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1543327573/business-3335725_1920_vekfpb.jpg'
    },
    {
      id: 'xx',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1535953046/morning-819362_1280_o40pua.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1535953046/morning-819362_1280_o40pua.jpg'
    },
    {
      id: 'c',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1542294775/pexels-photo-239466_tvvfle.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1542294775/pexels-photo-239466_tvvfle.jpg'
    },
    {
      id: 'xxx',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1542298591/pexels-photo-273222_ttkift.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1542298591/pexels-photo-273222_ttkift.jpg'
    },
    {
      id: 'xxxx',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1554634140/xllfebhzlrgceropiqhp.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1554634140/xllfebhzlrgceropiqhp.jpg'
    },
    {
      id: 'ccc',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1554666364/rtyz0twfrmswuwxrzglh.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1554666364/rtyz0twfrmswuwxrzglh.jpg'
    },
    {
      id: 'xxx',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1542298591/pexels-photo-273222_ttkift.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1542298591/pexels-photo-273222_ttkift.jpg'
    },
    {
      id: 'xxxx',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1554634140/xllfebhzlrgceropiqhp.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1554634140/xllfebhzlrgceropiqhp.jpg'
    },
    {
      id: 'ccc',
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1554666364/rtyz0twfrmswuwxrzglh.jpg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1554666364/rtyz0twfrmswuwxrzglh.jpg'
    }

  ]
}
