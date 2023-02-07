import React, { useRef } from "react";
import { Dropdown, Radio, Space, Button, Input, Checkbox } from "antd-mobile";
import { DropdownRef } from "antd-mobile/es/components/dropdown";
import DetailCard from "./Components/DetailCard";
import {
  categoryList,
  stateList,
  cityList,
  bedRoomList,
  bathRoomList,
} from "./const.js";
import "./index.scss";

const btnEle = (ref: any) => {
  return (
    <div style={{ padding: "0 12px 12px" }}>
      <Button
        color="primary"
        block
        onClick={() => {
          ref.current?.close();
        }}
      >
        确定
      </Button>
    </div>
  );
};

const App: React.FC<{ list: any }> = ({ list }) => {
  const ref = useRef<DropdownRef>(null);
  console.log("props", list);
  // const list = useContext();

  return (
    <div className="listing">
      <div className="menu-wrapper">
        <Dropdown ref={ref}>
          <Dropdown.Item key="categories" title="Categories">
            <div style={{ padding: 12 }}>
              <Radio.Group defaultValue="1">
                <Space direction="vertical">
                  {categoryList.map((name: string, idx: number) => (
                    <Radio value={idx}>{name}</Radio>
                  ))}
                  <Radio value="2">Cabin (1)</Radio>
                  <Radio value="3">Condo (0)</Radio>
                  <Radio value="4">Tiny House (0)</Radio>
                  <Radio value="5">Tiny Home (0)</Radio>
                </Space>
              </Radio.Group>
            </div>
            {btnEle(ref)}
          </Dropdown.Item>
          <Dropdown.Item key="price" title="Price">
            <div style={{ padding: 12, display: "flex", marginBottom: 10 }}>
              <Input placeholder="Min" value="" />
              <Input placeholder="Max" value="" />
            </div>
            {btnEle(ref)}
          </Dropdown.Item>
          <Dropdown.Item key="state" title="State">
            <div style={{ padding: 12 }}>
              <Checkbox.Group
              // value={value}
              // onChange={val => {
              //   setValue(val as string[])
              // }}
              >
                <Space direction="vertical" justify="center">
                  {stateList.map((state, idx) => (
                    <Checkbox value={idx}>{state}</Checkbox>
                  ))}
                </Space>
              </Checkbox.Group>
            </div>
            {btnEle(ref)}
          </Dropdown.Item>
          <Dropdown.Item key="city" title="City">
            <div style={{ padding: 12 }}>
              <Checkbox.Group
              // value={value}
              // onChange={val => {
              //   setValue(val as string[])
              // }}
              >
                <Space direction="vertical" justify="center">
                  {cityList.map((state, idx) => (
                    <Checkbox value={idx}>{state}</Checkbox>
                  ))}
                </Space>
              </Checkbox.Group>
            </div>
            {btnEle(ref)}
          </Dropdown.Item>
          <Dropdown.Item key="bedroom" title="Bedroom Numbers">
            <div style={{ padding: 12 }}>
              <Checkbox.Group
              // value={value}
              // onChange={val => {
              //   setValue(val as string[])
              // }}
              >
                <Space direction="vertical" justify="center">
                  {bedRoomList.map((state, idx) => (
                    <Checkbox value={idx}>{state}</Checkbox>
                  ))}
                </Space>
              </Checkbox.Group>
            </div>
            {btnEle(ref)}
          </Dropdown.Item>

          <Dropdown.Item key="bathroom" title="Bathroom Numbers">
            <div style={{ padding: 12 }}>
              <Checkbox.Group
              // value={value}
              // onChange={val => {
              //   setValue(val as string[])
              // }}
              >
                <Space direction="vertical" justify="center">
                  {bathRoomList.map((state, idx) => (
                    <Checkbox value={idx}>{state}</Checkbox>
                  ))}
                </Space>
              </Checkbox.Group>
            </div>
            {btnEle(ref)}
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="h38"></div>
      {/* <p className="title">
        Explore our collection of <br />
        available homes.
      </p> */}
      <DetailCard list={list} />
    </div>
  );
};

export default App;
