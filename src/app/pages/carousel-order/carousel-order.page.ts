import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-carousel-order',
  templateUrl: './carousel-order.page.html',
  styleUrls: ['./carousel-order.page.scss'],
})
export class CarouselOrderPage implements OnInit {
  superHeroes: Observable<any>;
  publisher: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.superHeroes = this.dataService.getHeroes();
    console.log(this.superHeroes);
  }

  segmentChanged(event){
    if(event.detail.value === 'all'){
        return this.publisher = ''
    }
    console.log(event);
    this.publisher = event.detail.value;
  }

}
