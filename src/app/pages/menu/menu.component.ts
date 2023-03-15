import { Component, OnInit} from '@angular/core';
// import { OrderdetailsService } from 'src/app/services/orderdetails.service';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
  constructor(private router:Router,private hero:HeroService){ }
  flowerData=this.hero.givedata();
  gotohere(id:any)
   {
   localStorage.setItem('id',id);
   this.router.navigate(['/single']);
  }

}
