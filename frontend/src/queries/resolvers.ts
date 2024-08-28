import { Pool } from 'pg';
import { IResolvers } from '@graphql-tools/utils';

// Database entity types
interface Badge {
  id: number;
  description: string | null;
  icon: string | null;
  points: number;
}

interface Action {
  id: number;
  badge_id: number;
  description: string;
}

interface UserAction {
  id: number;
  user_id: number;
  badge_action_id: number;
  complete_status: boolean;
}

// Create a new pool
const pool = new Pool({
  // Your database connection details
});

const resolvers: IResolvers = {
  Query: {
    badges: async (): Promise<Badge[]> => {
      const client = await pool.connect();
      try {
        const result = await client.query<Badge>('SELECT * FROM badges');
        return result.rows;
      } finally {
        client.release();
      }
    },
  },
  Badge: {
    actions: async (parent: Badge): Promise<Action[]> => {
      const client = await pool.connect();
      try {
        const result = await client.query<Action>(
          'SELECT * FROM actions WHERE badge_id = $1',
          [parent.id]
        );
        return result.rows;
      } finally {
        client.release();
      }
    },
  },
  Action: {
    completeStatus: async (parent: Action, { userId }: { userId: string }): Promise<boolean> => {
      const client = await pool.connect();
      try {
        const result = await client.query<UserAction>(
          'SELECT complete_status FROM User_Actions WHERE user_id = $1 AND badge_action_id = $2',
          [parseInt(userId), parent.id]
        );
        return result.rows.length > 0 ? result.rows[0].complete_status : false;
      } finally {
        client.release();
      }
    },
  },
};

export default resolvers;