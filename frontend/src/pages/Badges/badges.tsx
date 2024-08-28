import Layout from "../../components/layout/layout";

import React, { useEffect, useState } from "react";
import LastActivities from "../../components/ActivityComponent/index"
import BadgeScroll from "../../components/BadgeScroll/BadgeScroll";
import BadgeCarousel from "../../components/BadgeCarrosoul/BadgeCarrosoul";
import { GET_BADGES } from "../../queries/badge-list.query";
import { Badge } from "../../types/badge.type";
import { useQuery } from "@apollo/client";


interface BadgesData {
    badges: Badge[];
  }
  
  interface BadgesVars {
    userId: number;
  }

const Badges: React.FC = () => {

    const [badges, setBadges] = useState<Badge[]>([]);
    const { loading, error, data } = useQuery<BadgesData, BadgesVars>(GET_BADGES, {
        variables: { userId:1 },
      });
    useEffect(() => {
        console.log("Badges page");
        
        if (!loading) {
            if (error) {
                console.log("Error fetching badge data",error);
            }
            if (data) {
              const badges =ConverBadgeData(data.badges);
                setBadges(badges);
            }
            console.log("Mydata", badges);
        }
    }, [ loading]);

    
    return (
            <>
            <LastActivities />
            <BadgeCarousel badges={badges}/>
            <BadgeScroll badges={badges}/>
            </>
        
    );
}

function ConverBadgeData(badges: any) {
    return badges.map((badge: any) => {
        return {
            id: badge.id,
            icon: badge.icon,
            title: badge.title,
            description: badge.description,
            points: badge.points,
            actions: badge.actions.map((action: any) => {
                return {
                    description: action.description,
                    completeStatus: action.completedStatus.length > 0 ? action.completedStatus[0].complete_status : false,
                };
            }),
        };
    });
}

export default Badges