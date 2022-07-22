/**
 * Service interface for Queuing jobs
 */
export interface QueueService {
    every(jobName: string, interval: string, data: any, options: any): any;
    schedule(jobName: string, schedule: string, data: any): any;
    now(jobName: string, data: any): any;
}
