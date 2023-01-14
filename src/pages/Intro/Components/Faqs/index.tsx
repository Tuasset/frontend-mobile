import React from "react";
import { Collapse } from "antd-mobile";
import "./index.scss";

const questionList = [
  {
    question: "What is Travi?",
    answer:
      "Travis is uniquely created to help people create multiple revenue streams through real estate investment. Members are landlords, tenants, and investors of the property. They also receive additional perks such as usage of the home and rental car for travel.",
  },
  {
    question: "How does it work?",
    answer:
      "Travi brings together a group of individuals with similar finance goals to own a property through a membership program. It is not like a typical timeshare where individuals buy the right to use the property during certain times of the year. This archaic way of ownership is complicated and is not created to help individuals reach their finance goals.",
  },
  {
    question: "If I’m not using the property what options do I have?",
    answer:
      "Simple! Travi helps the co-owners* create additional revenue streams such as short term or long term rental. The platform also allows the co-owners full transparency of the asset.",
  },
  {
    question: "What are my financing options?",
    answer:
      "Travi’s membership option provides a simple way to kick start an individual towards real estate investment.",
  },
  {
    question: "Can I transfer ownership to someone else?",
    answer:
      "Travi’s membership option provides a simple way to kick start an individual towards real estate investment.Travi’s platform and consultants allow easy transfer ownership of the property with other members. If the group of co-owners decide to sell the property, they have the option with the guidance of a real estate expert.",
  },
  {
    question: "Do I have ownership of the home?",
    answer:
      "Our customer do have the ownership based on their percentage/shares of the property.",
  },
];

function App() {
  return (
    <div className="intro-faqs">
      <p className="title">FAQS</p>
      <Collapse>
        {questionList.map((item, idx) => {
          const { question, answer } = item;
          return (
            <Collapse.Panel key={String(idx)} title={question}>
              {answer}
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </div>
  );
}

export default App;
