import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}

  public agenda: Person[] = [
    {
      name: 'Daniel',
      description: 'Hijo',
      imagePath: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png'
    },
    {
      name: 'Paco',
      description: 'Amigo',
      imagePath: 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png'
    }
  ];

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async showAddPerson() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Añadir persona',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre'
        },
        // multiline input.
        {
          name: 'description',
          id: 'description',
          type: 'textarea',
          placeholder: 'Descripción'
        },
        {
          name: 'imagePath',
          type: 'text',
          placeholder: 'Ruta de la imagen'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: (data) => {
            this.agenda.push(data);
            //console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }

}

export interface Person {
  name: string;
  description: string;
  imagePath: string;
}