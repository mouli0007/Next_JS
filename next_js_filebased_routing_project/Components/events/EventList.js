import React from "react";
import EventItem from "./EventItem";
import events_list from "../../styles/Event-list.module.css";
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={events_list.list}>
      {items.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};

export default EventList;
