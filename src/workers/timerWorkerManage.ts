let instance: TimerWorkerManage | null = null;

export class TimerWorkerManage {
  private worker = Worker;

  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url));
  }

  public static getInstance(): TimerWorkerManage {
    if (!instance) {
      instance = new TimerWorkerManage();
    }
    return instance;
  }

  postMessage(message: any) {
    this.worker.postMessage(message);
  }

  onmessage(callback: (e: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
