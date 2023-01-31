import React, { useState } from "react";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  // MessageOutline,
  // MessageFill,
  AntOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { Routes, Route, useNavigate } from "react-router-dom";
// import logo from "./logo.svg";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Learn from "./pages/Learn";
import Landing from "./pages/Landing";
import Listing from "./pages/Listing";
import Experience from "./pages/Experience";
import Actual from "./pages/Actual";

import "./App.css";

function App() {
  const tabs = [
    {
      key: "mobile",
      title: "Intro",
      icon: <AppOutline />,
      badge: Badge.dot,
    }, {
      key: "learn",
      title: "Learn",
      icon: <UnorderedListOutline />,
      badge: "5",
    },{
      key: "mobile\\landing",
      title: "Home",
      icon: <AppOutline />,
      badge: Badge.dot,
    }, {
      key: "listing",
      title: "Listing",
      // icon: (active: boolean) =>
      //   active ? <MessageFill /> : <MessageOutline />,
      icon: <AntOutline />,
      badge: "99+",
    }, {
      key: "experience",
      title: "Experience",
      icon: <UserOutline />,
    },
  ];

  const [activeKey, setActiveKey] = useState("todo");
  let navigate = useNavigate();

  const changeItem = (val: string) => {
    setActiveKey(val);
    navigate('/'+val);
  };

  return (
    <>
      <div className="bar-wrapper">
        <TabBar activeKey={activeKey} onChange={changeItem}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
      <Routes>
        <Route path="mobile" element={<Intro />} />
        <Route path="learn" element={<Learn />} />
        <Route path="mobile/landing" element={<Landing />} />
        <Route path="mobile/actual" element={<Actual />} />
        <Route path="listing" element={<Listing />} />
        <Route path="experience" element={<Experience />} />
      </Routes>
      <div className="height60"></div>
    </>
  );
}

export default App;
