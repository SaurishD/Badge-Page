type Badge = {
    icon: string;
    title: string;
    description: string;
    points: number;
    actions: Action[];
  };

  type Action = {
    description: string;
    completeStatus: boolean;
  };
  

  
  export type { Badge, Action };