import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import Link from "next/link";
export default function Home() {
  const [items_, setItems] = useState([]);
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;

    const req_body = {
      email: enteredEmail,
      text: enteredFeedback,
    };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(req_body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const loadFeedback_ = async () => {
    const response = await fetch("/api/feedback");
    const data = await response.json();
    console.log(data);
    setItems(data.feedback);
  };

  return (
    <>
      <div>
        <h1>Next JS API Route</h1>

        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="email">Email : </label>
            <input ref={emailInput} type="text" placeholder="Email..." />
          </div>
          <br />
          <div>
            <label htmlFor="feedback">Your Feedback : </label>
            <textarea
              ref={feedbackInput}
              id="feedback"
              rows="5"
              type="text"
              placeholder="Feedback..."
            />
          </div>
          <br />
          <button>Send Feedback</button>
        </form>
        <br />
        <hr />
        <br />
        <button onClick={loadFeedback_}>Load Feedback</button>
        <button onClick={() => setItems([])}>Clear Feedback</button>
        <br />
        <br />
        <Link href="/feedback">Feed_Back_Page</Link>
        <br />
        {items_.map((item) => {
          return (
            <div key={item.id}>
              <br />
              <h3>Email : {item.email}</h3>
              <h3>Feedback : {item.text}</h3>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
