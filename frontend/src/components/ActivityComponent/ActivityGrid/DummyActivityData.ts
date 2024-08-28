// Type definition for an activity
import type { Activity } from '../../../types/activity.type';
  
  // Function to generate a random activity
  const generateRandomActivity = (): Activity => {
    const types: Activity['type'][] = ['Transaction', 'Bridged'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    
    return {
      type: randomType,
      points: Math.floor(Math.random() * 1000),
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).replace(',', ''),
      txid: '0x' + Math.random().toString(16).substr(2, 10) + '...1bac'
    };
  };
  
  // Generate an array of 10 random activities
  const dummyActivities: Activity[] = Array.from({ length: 10 }, generateRandomActivity);
  
  // Sort activities by date (most recent first)
  dummyActivities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  export { dummyActivities };
  export type { Activity };