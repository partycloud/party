import { actionCreatorVoid } from './helpers';

export const start = actionCreatorVoid('SERVER_START');
export const stop = actionCreatorVoid('SERVER_STOP');

enum Status {
  STOPPED = 0,
  STARTING = 1,
  RUNNING = 2,
  STOPPING = 3
}

export interface Fileset {
  hash: string;
  bytes: number;
}

export interface Server {
  id: string;
  name: string;
  image: string;
  currentOwnerId: string;
  fileset: Fileset;
  status: Status;
}
