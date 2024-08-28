

export const ORDER_PATH_PARAMS = {
  ALL: 'all',
  OPEN: 'open',
  NATIVE: ':type',
} as const;


export interface TradePageParams {
  pair?: string;
}

export const PATHS = {
  default: () => '/badges',
  badges : () => '/badges',
  dashboard: () => '/dashboard',
  tasks : () => '/tasks',
  leaderboard : () => '/leaderboard',
  connections : () => '/connections',
};
