import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OverviewPart from './OverviewPart';
import InstructorPart from './IntructorPart';

const CourseDetailsTab = () => {

    let tab1 = "Նկարագիր",
        tab2 = "Դասընթացավար";
    const tabStyle = 'intro-tabs tabs-box';

    return (
        <div className="intro-info-tabs">
            <Tabs>
                <TabList className={tabStyle}>
                    <Tab>
                        <button className="cursor-pointer">{tab1}</button>
                    </Tab>
                    <Tab>
                        <button className="cursor-pointer">{tab2}</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <OverviewPart />
                </TabPanel>

                <TabPanel>
                    <InstructorPart />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default CourseDetailsTab;