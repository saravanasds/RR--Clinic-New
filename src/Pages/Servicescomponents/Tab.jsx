import React, { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChangeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-10 mb-20">
        <button  className= {activeTab === 1 ? " border-b-2 border-blue-500" : ""} onClick={() => handleChangeTab(1)}>Tab1</button>
        <button   className= {activeTab === 2 ? " border-b-2 border-blue-500" : ""} onClick={() => handleChangeTab(2)}>Tab2</button>
        <button  className= {activeTab === 3 ? " border-b-2 border-blue-500" : ""} onClick={() => handleChangeTab(3)}>Tab3</button>
      </div>
      <div className="flex justify-center items-center gap-10">
      <div className= {activeTab === 1 ? "block " : "hidden"} >
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          nisi!
        </h2>
      </div>
      <div className={activeTab === 2 ? "block" : "hidden"}>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          nisi!gyjcjctcuvjgybhjedcrvtbynumiwxectvbynumi,o.p
        </h2>
      </div>
      <div className={activeTab === 3 ? "block" : "hidden"}>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          nisi!ewewdsdsd
        </h2>
      </div>
      </div>
    </div>
  );
};

export default Tab;
