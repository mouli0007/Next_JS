import React from "react";
import Button from "../../Components/ui/button";
import { useRef } from "react";
import search_styles from "../../styles/Event-search.module,css";
const EventsSearch = (props) => {
  function submitHandler(e) {
    e.preventDefault();
    const yearInput = useRef();
    const monthInputRef = useRef();
    const selectedYear = yearInput.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={search_styles.form} onSubmit={submitHandler}>
      <div className={search_styles.controls}>
        <div className={search_styles.controls}>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={yearInput}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.controls}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
