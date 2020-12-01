import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre:string = "";
  loading: HTMLIonLoadingElement;

  usuario ={
      name:'',
      email:'',
      password:''
  }

  constructor(
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event){
    console.log(this.usuario);
  }

  mostrarLoading(){
    this.presentLoadingWithOptions('loading');

    setTimeout(() => {
      this.loading.dismiss();
      this.navigate()
    }, 2000);
    
  }

  async presentLoadingWithOptions(message:string) {
    this.loading = await this.loadingController.create({
      message,
    });
    await this.loading.present();
  }
  navigate(){
    this.router.navigate(['/tab-card-slide'])
  }

}
