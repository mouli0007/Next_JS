import React from "react";
import { buildFeedback_, extractFeedback_ } from "../api/feedback";
import { useState } from "react";
const Feedback = ({ datas }) => {
  const [singleData, setSingleData] = useState();

  const loadFeedback = async (id) => {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    setSingleData(data.feedback);
  };

  return (
    <div>
      {singleData && singleData.email}
      {datas.map((feed) => {
        return (
          <div key={feed.id}>
            <h3>{feed.feedback}</h3>
            <button onClick={loadFeedback.bind(null, feed.id)}>
              Show Deatils
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Feedback;

// Making it pre rendering !
// We cant use fetch in pre rendering functions
//  So we can use node js server side logic !

export const getDtatisProps = async () => {
  const filePath = buildFeedback_();
  const data = extractFeedback_(filePath);
  const datas = data.feedback;

  return {
    props: {
      datas,
    },
  };
};
