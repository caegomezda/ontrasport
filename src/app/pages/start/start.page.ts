import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StartModalPage } from '../start-modal/start-modal.page';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

 /*  company:any[]; */

  constructor(private modalController: ModalController,
              private dataService: DataService) { }

  ngOnInit() {
/*     this.dataService.getCompanies().subscribe( (comp:any) =>{
      this.company = comp;
    }) */
  }

  onClickPlay(){
    console.log(" Play ")
  }

  async showCompanies() {
    const modal = await this.modalController.create({
      component: StartModalPage,
    });
     return await modal.present();

  }

}
