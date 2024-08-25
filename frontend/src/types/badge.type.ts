type Badge = {
    icon: string;
    title: string;
    description: string;
    points: number;
    actions: Action[];
  };

  type Action = {
    name: string;
    description: string;
    completeStatus: boolean;
  };
  

  
  export type { Badge, Action };