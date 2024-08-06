import React, { useEffect } from "react";
import LiveMessage from "./LiveMessage";
import { generate, getRandomSentence } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/liveChatSlice";

function LiveChatContainer() {
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
    <div className="border h-[25rem] border-black w-2/6 ml-4 rounded bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((lc, index) => (
        <LiveMessage key={index} name={lc.name} message={lc.message} />
      ))}
    </div>
  );
}

export default LiveChatContainer;
