import { Component } from '@angular/core';
import { messageContent } from './messageContents';

@Component({
  selector: 'app-last-right',
  templateUrl: './last-right.component.html',
  styleUrls: ['./last-right.component.css']
})
export class LastRightComponent {
  colors = ['#F1B032', '#EDA0A8', '#79C4DB', '#AA98CA'];

  getBorder(index:number):string{
    const colorIndex = index % this.colors.length;
    return this.colors[colorIndex]
  }
  Content :messageContent[]=[
    {
      img: 'assets/img/message1.png',
      name:'Yassin Mustafa',
      message:'Hi Angelina! How are You?'
    
    },
    {
      img: 'assets/img/message2.png',
      name:'Mohamed Mustafa',
      message:'Do you need that design?'
    
    },
    {
      img: 'assets/img/message3.png',
      name:'Omar Mustafa',
      message:'What is the price of hourly...'
    
    },
    {
      img: 'assets/img/message4.png',
      name:'Ahmed Mustafa',
      message:'Awsome design!!'
    
    },
    
   ]
  
    Image1:string ="assets/img/call1.png"
    Image2:string ="assets/img/call2.png"
    Image3:string ="assets/img/call3.png"
    Image4:string ="assets/img/message3.png"
    Image5:string ="assets/img/message4.png"
}
