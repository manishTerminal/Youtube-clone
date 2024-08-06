import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { generate, getRandomSentence } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/liveChatSlice";

function LiveChatContainer() {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessage = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: getRandomSentence(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(time);
    };
  }, []);
  return (
    <div className="mx-2">
      <div className="border h-[25rem] border-black w-full rounded bg-slate-100 overflow-y-scroll flex flex-col-reverse ">
        {chatMessage.map((lc, index) => (
          <LiveMessage key={index} name={lc.name} message={lc.message} />
        ))}
      </div>
      <form
        className="border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "You",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          className="border m-1 w-[23rem] px-1 h-7"
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-red-800 text-white px-4 py-1 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChatContainer;
