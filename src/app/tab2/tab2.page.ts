import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Person } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}

  public visits: Visit[] = [
    {
      person: {
        name: 'Daniel',
        description: 'Hijo',
        imagePath: ''
      },
      location: 'Casa',
      date: new Date('2021-03-02T18:32:00')
    }
  ];

   async presentModal(visit: Visit) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: visit
    });
    return await modal.present();
  }

  parseDate(date) {
    return (
      date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
    );
  }

}

export interface Visit {
  person: Person;
  location: string;
  date: Date;
}