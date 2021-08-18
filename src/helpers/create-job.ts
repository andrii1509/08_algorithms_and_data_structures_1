import {Job} from '../interfaces/job-interface';

let id = 0;

export function createJob(): Job {
  id++;
  return {
    id: id,
    priority: Math.floor(Math.random() * 101),
    task: function () {
      console.log('id= ' + this.id, '\nPriority= ', this.priority);
    }
  };
}