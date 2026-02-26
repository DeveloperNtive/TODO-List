import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonList, IonCard, IonCardContent, IonCardHeader, IonCardTitle, InfiniteScrollCustomEvent } from '@ionic/angular/standalone';
import { GetTaskList } from './get-task-list';
import { LoadTasksUseCase } from '../../application/usecases/loadTasks.usecases';
import { HttpClient } from '@angular/common/http';
import { TaskResponseDTO } from '../../infrastructure/http/task-response.dto';
import { DatePipe } from '@angular/common';
// Ajusta la ruta según tu estructura

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonList, DatePipe, IonCard, IonCardContent, IonCardHeader, IonCardTitle ],
  providers: [LoadTasksUseCase, GetTaskList, HttpClient],
})
export class TaskListComponent implements OnInit {

  constructor() { }

  private readonly getTaskList: GetTaskList = inject(GetTaskList);
  tasks = signal<TaskResponseDTO[]>([])

  ngOnInit() {
    this.getTaskList.execute().subscribe((tasks) => {
      console.log(tasks);
      this.tasks.set(tasks);
    });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

}
