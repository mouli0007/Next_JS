import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data_, setData] = useState([]);
  const emailInput = useRef();
  const feedBackInput = useRef();

  const submitform_handler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedBackInput.current.value;

    const reqBody = {
      email: enteredEmail,
      feedback: enteredFeedback,
    };
    fetch("api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const load_comments = async () => {
    const response = await fetch("/api/feedback");
    const data = await response.json();
    setData(data.feedback);
  };
  return (
    <>
      <h1>Next Js 13</h1>

      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              ref={emailInput}
            />
          </div>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="message">Your Feedback</label>
          <div>
            <textarea
              name="feedback"
              id=""
              cols="30"
              rows="10"
              ref={feedBackInput}
            ></textarea>
          </div>
        </div>
        <br />
        <button onClick={submitform_handler}>Send Feedback</button>
        <br />
        <br />
      </form>
      <Link href="/api/feedback">View_My_Database</Link>
      <br />
      <br />
      <hr />
      <br />
      <button onClick={load_comments}>Load Comments</button>

      <button onClick={() => setData([])}>Clear_fedback</button>
      {data_.map((data) => {
        return (
          <div key={data.id}>
            <br />
            <Link href="/feedback">
              <h3>{data.feedback}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
}
