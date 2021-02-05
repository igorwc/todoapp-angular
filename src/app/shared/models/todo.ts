export class Todo {
  constructor(
      public id: number,
      public task: string,
      public who: string,
      public dueDate: Date,
      public done: boolean,
  ) { }
}
