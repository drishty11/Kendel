import React, { useState } from "react";
import { BiFace, TiAttachmentOutline, MdSend} from 'react-icons/all';
import { Cross1, Doubt, Doubt1 } from '../../images/Icons/icons';
import "./ChatPopup.css";

function StudentDoubt({ text, setText, doubtType }) {
  const messages = ["hey whatsup", "what are you doing"];

  return (
    <div
      id="Chat-con"
      className="bg-white position-fixed d-flex flex-column Chat-Doubts"
    >
      <div className="header">
        <div className="d-flex justify-content-between p-4">
          {doubtType === 'Solved' ?<h5>Anjali Doubts</h5> : <h5 className="text-left">Closed Doubt</h5>}
         <button onClick={() => setText(!text)} className="border-0 bg-transparent"><Cross1 /></button>
        </div>
      </div>

      <div class="msg-area flex-grow-1 mt-4">
        {messages.map((msg, i) =>
          i % 2 ? (
            <>
            <h5 className="timing text-center">Today at 6:20 PM</h5>
            <div className="d-flex justify-content-end sent">
               
                <p className="bubble right">{msg}</p>
            </div>
            </>
          ) : ( 
            <> 
            <h5  className="timing text-center">Today at 6:20 PM</h5>
            <div className="d-flex justify-content-start received">
              
              <p className="bubble left ml-2.5">{msg}</p>
            </div>
            </>
          )
        )}
      </div>
    
      <div>
        {doubtType === "Solved" ? (
          <h6 className="third-text other-bg p-4">
            Doubt is solved & Thread is closed
          </h6>
        ) : (
          <div className="chat-input d-flex justify-content-between align-items-center p-2 my-3 mx-auto">
            <div className="d-flex justify-content-evenly align-items-center">
              <BiFace size={26} className="mr-1" />
              <input placeholder="Type something...." className="border-0" style={{ outline: 'none'}} /> 
            </div>
            <div className="d-flex">
              <TiAttachmentOutline size={26} />
              <MdSend size={26} className="ml-1 pr-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default function ChatBoxbutton() {
  const [chatopen, setChatopen] = useState(false);
  return (
    <div className="position-absolute chatButton">
      {chatopen ? (
        <SolvedTab chatopen={chatopen} setChatopen={setChatopen} />
      ) : (
        <button className="pop border-0 d-flex justify-content-center align-items-center" onClick={() => setChatopen(!chatopen)}>
          <Doubt1 />
          Solve Doubts
        </button>
      )}
    </div>
  );
}
function SolvedTab({ chatopen, setChatopen }) {
  const [text, setText] = useState(false);
  const [activeTab, setActiveTab] = useState("Solved");
  const messages = [
    {
      heading: "Doubt from Anjali",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from Anjali",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from Anjali",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from Anjali",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from Anjali",
      class: "Class:",
      post: "Posted On:",
    },
  ];
  const messages2 = [
    {
      heading: "Doubt from abcd",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from abcd2",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from Student Name",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from Student Name",
      class: "Class:",
      post: "Posted On:",
    },
    {
      heading: "Doubt from Student Name",
      class: "Class:",
      post: "Posted On:",
    },
  ];

  return (
    <div>
      {text ? (
        <StudentDoubt text={text} setText={setText} doubtType={activeTab} />
      ) : (
        <div id="Chat-con" className="bg-white position-fixed">
          <div className="header">
            <div className="d-flex justify-content-between align-items-center px-4 pt-4 pb-2">
              <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center ChatIcon1 bg-white mr-3">
                <Doubt />
              </div>
              <h6 className="mb-0">{activeTab} Doubts</h6>
              </div>
              <button onClick={() => setChatopen(!chatopen)} className="border-0 bg-transparent"><Cross1 /></button>
            </div>
            <div
              className="d-flex justify-content-evenly"
              style={{ height: "50px" }}
            >
              <button
                className={`${
                  activeTab === "Unsolved"
                    ? "chat-header"
                    : "opacity-3 border-0"
                } w-25 bg-transparent text-white h6 mb-0`}
                onClick={() => setActiveTab("Unsolved")}
              >
                Unsolved
              </button>
              <button
                className={`${
                  activeTab === "Solved" ? "chat-header" : "opacity-3 border-0"
                } w-25 bg-transparent text-white h6 mb-0`}
                onClick={() => setActiveTab("Solved")}
              >
                Solved
              </button>
            </div>
          </div>

          <div className="chat-box overflow-scroll d-flex flex-column justify-content-start align-items-start px-3 py-3">
            {(activeTab === "Unsolved" ? messages : messages2).map(
              (msg, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex align-items-center mb-2 px-3 py-3 Solvedmain"
                    onClick={() => setText(!text)}
                  >
                    <div className="d-flex justify-content-center align-items-center ChatIcon ">
                      <Doubt1 />
                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start ml-3">
                      <h6>{msg.heading}</h6>
                      <span>{msg.class}</span>
                      <span>{msg.post}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}
// d-flex justify-content-center align-items-center circle rounded-full ChatIcon mr-3