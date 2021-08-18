export interface Job {
  id: number;
  priority: number;
  task: Function;
}