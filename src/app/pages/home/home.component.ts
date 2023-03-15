import { Component,OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  constructor(private service:HeroService){ }
flowerData:any;
  ngOnInit(): void {
    // this.flowerData = this.service.flwDetails;
    
  }

}
