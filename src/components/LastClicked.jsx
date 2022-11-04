import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const LastClicked = () => {
  const { data } = useContext(AppContext);

  const timestamp = new Date(data.timestamp * 1000);
  const hours = timestamp.getHours(),
    minute = timestamp.getMinutes();
  //   console.log(hours, minute);

  return (
    <>
      <div>
        <p>
          <em>{`Last Sync:- ${hours}:${minute} mins ago.`}</em>
        </p>
      </div>
    </>
  );
};

export default LastClicked;
