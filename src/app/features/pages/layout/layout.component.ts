import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import {
  IonHeader,
  IonButtons, 
  IonBackButton,
  IonContent,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [IonRouterOutlet, IonHeader, IonContent, IonTitle, IonToolbar],
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
