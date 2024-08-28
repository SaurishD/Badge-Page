import React, { useEffect, useState } from 'react';
import  ActivityGrid  from './ActivityGrid/LastActivitiesGrid';
import { Activity, dummyActivities } from './ActivityGrid/DummyActivityData';
import { useQuery, useSubscription } from '@apollo/client';
import { SUBSCRIBE_ACTIVITIES } from '../../queries/activities-query';

interface ActivityData {
    activity: Activity[];
}

interface ActivityVars {
    userId: number;
}

const LastActivities: React.FC = () => {
    const [activityData, setActivityData] = useState<Activity[]>([]);

    const { loading, error, data } = useQuery<ActivityData, ActivityVars>(SUBSCRIBE_ACTIVITIES, {variables: {userId: 1}});

    useEffect(() => {
        console.log("LastActivities page");
        if (!loading) {
            if (error) {
                console.log("Error fetching activity data", error);
            }
            if (data) {
                setActivityData(data.activity);
            }
            console.log("Activity data", data);
        }
    } , [loading]);


    return (
        <div className="bg-primary-background min-h-screen text-text-primary">
            <ActivityGrid activities={activityData}/>
        </div>
    );
}

export default LastActivities;