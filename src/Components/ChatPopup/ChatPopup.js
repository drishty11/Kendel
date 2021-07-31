import React, { useState } from "react";
import { BiFace, TiAttachmentOutline, MdSend} from 'react-icons/all';
import { Send1 } from '../../images/Icons/icons'
import { Cross1, Doubt, Doubt1, DoubtChatbox } from '../../images/Icons/icons';
import "./ChatPopup.css";

function StudentDoubt({ text, setText, doubtType }) {
  const messages = ["hey whatsup", "what are you doing"];

  return (
    <div
      id="Chat-con"
      className="bg-white position-fixed d-flex flex-column Chat-Doubts"
    >
      <div className="header">
        <div className="d-flex justify-content-end align-items-center p-4">
          {doubtType === 'Solved' ?<p className="mb-0">Anjali's Doubts</p> : <p className="mb-0">Closed Doubt</p>}
         <button onClick={() => setText(!text)} className="border-0 bg-transparent"><Cross1 /></button>
        </div>
      </div>

      <div class="msg-area flex-grow-1 mt-4">
        {messages.map((msg, i) =>
          i % 2 ? (
            <>
            <h5 className="timing text-center">Today at 6:20 PM</h5>
            <div className="d-flex justify-content-end sent">
               
                <p className="chat-bubble right">{msg}</p>
            </div>
            </>
          ) : ( 
            <> 
            <h5  className="timing text-center">Today at 6:20 PM</h5>
            <div className="d-flex justify-content-start received">
              
              <p className="chat-bubble left ml-2.5">{msg}</p>
            </div>
            </>
          )
        )}
      </div>
    
      <div>
        {doubtType === "Solved" ? (
          <h6 className="third-text text-center other-bg p-3 mb-3">
            Doubt is solved & Thread is closed
          </h6>
        ) : (
            <div className="chat-input align-items-center p-2 my-3 mx-auto position-relative">
              <div className="d-flex align-items-center pointer">
                <BiFace size={18} className="mr-1 mt-1 cursor-pointer" fill={`#464353`} />
                <input placeholder="Type something...." className="border-0 input w-75" style={{fontSize: '12px'}} /> 
              </div>
              <div className="d-flex align-items-center pointer position-absolute" style={{top: '8px', right: '8px'}}>
                <TiAttachmentOutline size={18} className="mt-1" fill={`#464353`} />
                <Send1 />
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
    <div className="position-fixed chatButton">
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
            <div className="d-flex justify-content-between align-items-center px-4 pt-3 pb-2">
              <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center ChatIcon1 bg-white mr-3">
                <Doubt />
              </div>
              <p className="mb-0">{activeTab} Doubts</p>
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
                } w-25 bg-transparent text-white p6 mb-0`}
                onClick={() => setActiveTab("Unsolved")}
              >
                Unsolved
              </button>
              <button
                className={`${
                  activeTab === "Solved" ? "chat-header" : "opacity-3 border-0"
                } w-25 bg-transparent text-white p6 mb-0`}
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
                    className="d-flex align-items-center mb-3 px-3 py-3 Solvedmain pointer"
                    onClick={() => setText(!text)}
                  >
                    <div className="d-flex justify-content-center align-items-center ChatIcon">
                      <DoubtChatbox />
                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start ml-3">
                      <h6 className="mb-1" style={{ color: '#05060FF2', fontSize: '14px'}}>{msg.heading}</h6>
                      <span className="mb-1" style={{color: '#464353', fontSize: '10px'}}>{msg.class}</span>
                      <span className="mb-1" style={{color: '#464353', fontSize: '10px'}}>{msg.post}</span>
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