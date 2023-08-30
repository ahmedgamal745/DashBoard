import { Component } from '@angular/core';
import { SideNav } from './leftnav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent {
  constructor(private router:Router){

  }

  navigateToComponent(comName :string){
    if (comName == 'Myhome') {
      this.router.navigate(['/home'])
    }
  }
  list :SideNav[]=[
    {
      number: '1',
      name:'Myhome',
      icon:'fa-solid fa-house'
    },
    {
      number: '2',
      name:'Analytics',
      icon:'fa-solid fa-chart-line'
    },
    {
      number: '3',
      name:'Products',
      icon:'fa-solid fa-box'
    },
    {
      number: '4',
      name:'Order',
      icon:'fa-solid fa-cart-shopping'
    },
    {
      number: '5',
      name:'Settings',
      icon:'fa-solid fa-gear'
    },
    {
      number: '6',
      name:'About',
      icon:'fa-solid fa-circle-info'
    },
    {
      number: '7',
      name:'Contact',
      icon:'fa-solid fa-phone'
    }
   ]
}
