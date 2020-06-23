import { CLUSTER } from './Cell';

export const longEvolveCluster = ([y, x]) => ({
  type: CLUSTER,
  cluster: [
    [y, x],
    [y - 1, x],
    [y - 1, x - 1],
    [y - 2, x],
    [y - 2, x + 1],
  ],
});
