import { Iproduct } from './../ViewModel/iproduct';
import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../Shared/company-info';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inforcomapany:CompanyInfo;
  isdisplayed:boolean;
  Products:Iproduct[]=[];
  constructor()
   {
    this.inforcomapany=new CompanyInfo ('ITI','http://placeimg.com/640/360/any',['development','Testing','Markting']);
    this.isdisplayed=true;
    this.Products=[  {Id:1,name:'Hp',quantity:5,price:5000},
                      {Id:2,name:'Samsung',quantity:30,price:2000},
                      {Id:3,name:'Dell',quantity:0,price:4000},
                      {Id:4,name:'Lenvo',quantity:14,price:10000},
                   ]

   }
   ToggleSevices()
   {
     this.isdisplayed=!this.isdisplayed;
   }

  ngOnInit(): void {
  }

}
