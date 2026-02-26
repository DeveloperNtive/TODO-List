import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {

  constructor() { }

  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    // Using snapshot (only gets the initial value)
    const id = this.route.snapshot.paramMap.get('id');

    // Or subscribing to params observable to react to changes on the same component
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
    });
  }

}
