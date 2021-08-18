import {Job} from '../interfaces/job-interface';

export function sortJobs(jobs: Job[]): Job[] {
  if (jobs.length < 2) return jobs;
  let pivot = jobs[0];
  const left = [];
  const right = [];

  for (let i = 1; i < jobs.length; i++) {
    if (pivot.priority > jobs[i].priority) {
      left.push(jobs[i]);
    } else {
      right.push(jobs[i]);
    }
  }
  return sortJobs(left).concat(pivot, sortJobs(right));
}