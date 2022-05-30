import { Component, OnInit } from '@angular/core';

interface ListModel {
  id: string;
  label: string;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public todoInput;

  public list: ListModel[] = JSON.parse(localStorage.getItem('list')) ?? [];

  constructor() { }

  ngOnInit() {}

  public submitTask(): void {
    if(!this.todoInput) {
      return;
    }

    this.list.push({
      id: this.generateId(),
      label: this.todoInput
    });

    localStorage.setItem('list', JSON.stringify(this.list));

    this.todoInput = '';
  }

  public removeTask(id: string): void {
    this.list = this.list.filter((item) => item.id !== id);
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  public removeTaskWithDelay(id: string): void {
    setTimeout(() => {
      this.removeTask(id);
    }, 500);
  }

  private generateId(): string {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,'');
  }

}
