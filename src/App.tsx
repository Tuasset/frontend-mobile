import React, { useState } from "react";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { Routes, Route, useNavigate } from "react-router-dom";
// import logo from "./logo.svg";
import Main from "./pages/Main";
import Learn from "./pages/Learn";
import Listing from "./pages/Listing";
import Experience from "./pages/Experience";

import "./App.css";

function App() {
  const tabs = [
    {
      key: "",
      title: "首页",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "learn",
      title: "待办",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "listing",
      title: "消息",
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: "99+",
    },
    {
      key: "experience",
      title: "我的",
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
      <div className="App">
        <TabBar activeKey={activeKey} onChange={changeItem}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="learn" element={<Learn />} />
        <Route path="listing" element={<Listing />} />
        <Route path="experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
