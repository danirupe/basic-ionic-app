import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Person } from '../tab1/tab1.page';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.page.html',
  styleUrls: ['modal.page.scss']
})
export class ModalPage {
  @Input() person: Person;
  @Input() location: string;
  @Input() date: Date;

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
  
  constructor(public modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
