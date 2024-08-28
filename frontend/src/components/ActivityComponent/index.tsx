import React from 'react';
import  ActivityGrid  from './ActivityGrid/LastActivitiesGrid';
import { dummyActivities } from './ActivityGrid/DummyActivityData';

const LastActivities: React.FC = () => {
    return (
        <div className="bg-primary-background min-h-screen text-text-primary">
            <ActivityGrid activities={dummyActivities}/>
        </div>
    );
}

export default LastActivities;