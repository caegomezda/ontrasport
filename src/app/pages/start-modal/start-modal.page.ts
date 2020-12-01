import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.page.html',
  styleUrls: ['./start-modal.page.scss'],
})
export class StartModalPage implements OnInit {

  company:any[];

  constructor(  private dataService: DataService,
                private modalController:ModalController){}

  ngOnInit() {
    this.dataService.getCompanies().subscribe( (comp:any) =>{
      this.company = comp;
    })
  }

  onClick(event:any){
    this.modalController.dismiss(
      console.log(event.srcElement.innerText)
    );
  }

}
