/**
 * @author linhx
 */
import { length } from './ArrayUtils';

class Queue {
  jobs = [];
  isRunning = false;
  push (job) {
    this.jobs.push(job);
  }
  async run () {
    if (this.isRunning) {
      return;
    }
    if (!length(this.jobs)) {
      return;
    }
    this.isRunning = true;
    const job = this.jobs.shift();
    await job.apply();
    this.isRunning = false;
    this.start();
  }

  async exec (job: () => any) {
    this.push(job);
    await this.run();
  }
}

export default Queue;
