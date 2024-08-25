import Layout from "../../components/layout/layout";

import React from "react";
import LastActivities from "../../components/ActivityComponent/index"
import BadgeScroll from "../../components/BadgeScroll/BadgeScroll";
import DummyBadgeData from "../../dummies/dummyBadgeData";
import BadgeCarousel from "../../components/BadgeCarrosoul/BadgeCarrosoul";



const Badges: React.FC = () => {
    console.log("Badges page");
    return (
            <>
            <LastActivities />
            <BadgeCarousel badges={DummyBadgeData}/>
            <BadgeScroll badges={DummyBadgeData}/>
            </>
        
    );
}

export default Badges