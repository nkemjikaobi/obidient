import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel, TabProps } from "react-tabs";
import "react-tabs/style/react-tabs.css";

interface CustomTabsProps extends TabProps {
  tabNames: any;
  tabComponents: ChildComponent[];
  setActiveTab?: Function;
}

interface ChildComponent {
  element: () => JSX.Element;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabNames, tabComponents, setActiveTab }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <Tabs
      className="mx-auto"
      onSelect={(index) => {
        setTabIndex(index);
        setActiveTab && setActiveTab(index);
      }}
      selectedIndex={tabIndex}
    >
      <TabList className="flex items-center w-[26.75rem] h-[1.313rem]">
        {tabNames.map((tabName: any, index: number) => (
          <Tab
            className={`capitalize mr-[1.625rem] text-14 whitespace-nowrap focus:outline-none focus:ring-0 pb-1 text-[#5F5F61] font-medium border border-l-0 border-r-0 border-t-0 cursor-pointer`}
            key={index}
            selectedClassName="border font-bold text-14 border-[#F6F6F6] px-8 mb-4 pt-2 flex items-center justify-center bg-[#F6F6F6] text-[#262628]"
          >
            {tabName.name}
          </Tab>
        ))}
      </TabList>
      <hr />

      {tabComponents.map((tabComponent, index) => (
        <TabPanel key={index}>
          <tabComponent.element />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default CustomTabs;

CustomTabs.defaultProps = {
  setActiveTab: () => {},
};
