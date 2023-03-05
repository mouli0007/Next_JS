import React, { Fragment, useState } from "react";
import { buildFeedback_, extractFeedback_ } from "../api/feedback";
import Link from "next/link";
import FeedBack from "../../Components/FeedbackC";

const Feedback = (props) => {
  const [singleData, setSingleData] = useState();

  // console.log("SingleData : " + JSON.stringify(singleData));
  async function loadedFeedback(id) {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    // console.log(data.feedback);
    setSingleData(data.feedback);
  }

  return (
    <Fragment>
      <br />
      <br />
      {singleData && <p>{singleData.email}</p>}
      <ul>
        {props.feedback.map((item) => {
          return (
            <div key={item.id}>
              <h3>FeedBack : {item.text}</h3>
              <br />
              <button onClick={loadedFeedback.bind(null, item.id)}>
                Show Deatils
              </button>
              <br />
              <br />
            </div>
          );
        })}
      </ul>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedback_();
  const data = extractFeedback_(filePath);

  return {
    props: {
      feedback: data,
    },
  };
};

export default Feedback;
