import React from 'react';
import  ActivityGrid  from './ActivityGrid/LastActivitiesGrid';
import { dummyActivities } from './ActivityGrid/DummyActivityData';

const LastActivities: React.FC = () => {
    return (
        <div>
            <ActivityGrid activities={dummyActivities}/>
        </div>
    );
}

export default LastActivities;