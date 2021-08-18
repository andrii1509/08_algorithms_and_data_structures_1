import {createJob} from './helpers/create-job';
import {sortJobs} from './helpers/sort-jobs';

const jobs = [];

for (let i = 0; i < 100000; i++) {
  jobs.push(createJob());
}

const sortedJobs = sortJobs(jobs);

for (let i = 0; i < sortedJobs.length; i++) {
  sortedJobs[i].task();
}

