import React, { useState, useEffect, createContext } from "react";
import { Badge, TabBar } from "antd-mobile";
import csvToJson from "csvtojson";
import {
  AppOutline,
  ContentOutline,
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
<<<<<<< HEAD
=======
import Actual from "./pages/Actual";

>>>>>>> 8e4d26dfdf8a14318715ec80f776638fa9f98e46
import "./App.css";

const offerListUrl =
  "https://tuassets.com/wp-content/reactpress/data/wc-product-export-data.csv";

function App() {
  // const OfferListContext = createContext([]);
  const [offerList, setOfferList] = useState([]);

  const tabs = [
    {
      key: "mobile",
      title: "Intro",
      icon: <ContentOutline />,
      badge: Badge.dot,
<<<<<<< HEAD
    },
    // {
    //   key: "learn",
    //   title: "Learn",
    //   icon: <UnorderedListOutline />,
    //   badge: "5",
    // },
    {
=======
    }, {
      key: "learn",
      title: "Learn",
      icon: <UnorderedListOutline />,
      badge: "5",
    },{
>>>>>>> 8e4d26dfdf8a14318715ec80f776638fa9f98e46
      key: "mobile\\landing",
      title: "Home",
      icon: <AppOutline />,
      badge: Badge.dot,
    }, {
      key: "listing",
      title: "Listing",
      // icon: (active: boolean) =>
      //   active ? <MessageFill /> : <MessageOutline />,
      icon: <UnorderedListOutline />,
      badge: "99+",
<<<<<<< HEAD
    },
    // {
    //   key: "experience",
    //   title: "Experience",
    //   icon: <UserOutline />,
    // },
=======
    }, {
      key: "experience",
      title: "Experience",
      icon: <UserOutline />,
    },
>>>>>>> 8e4d26dfdf8a14318715ec80f776638fa9f98e46
  ];

  useEffect(() => {
    fetch(
      "https://tuassets.com/wp-content/reactpress/data/wc-product-export-data.csv",
      {
        method: "get",
        headers: {
          "content-type": "text/csv;charset=UTF-8",
        },
      }
    )
      .then(async (res) => {
        if (res.status === 200) {
          const csv = await res.text();
          const list:any = await csvToJson().fromString(csv);
          // list.forEach((item: any, idx: number) => {
          //   console.log(idx, item["Meta: _productid"]);
          // });
          setOfferList(list);
        } else {
          console.log(`Error code ${res.status}`);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const [activeKey, setActiveKey] = useState("todo");
  let navigate = useNavigate();

  const changeItem = (val: string) => {
    setActiveKey(val);
    navigate("/" + val);
  };

  return (
    <>
      {/* <OfferListContext.Provider value={[]}> */}
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
<<<<<<< HEAD
        <Route path="listing" element={<Listing list={offerList} />} />
=======
        <Route path="mobile/actual" element={<Actual />} />
        <Route path="listing" element={<Listing />} />
>>>>>>> 8e4d26dfdf8a14318715ec80f776638fa9f98e46
        <Route path="experience" element={<Experience />} />
      </Routes>
      <div className="height60"></div>
      {/* </OfferListContext.Provider> */}
    </>
  );
}

export default App;
