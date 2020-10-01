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
    if (!length(this.jobs)) {
      this.isRunning = false;
      return;
    }
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    const job = this.jobs.shift();
    await job.apply();
    this.isRunning = false;
    this.run();
  }
}

export default Queue;
