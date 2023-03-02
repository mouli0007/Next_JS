import React from "react";
import { getAllEvents } from "../../data";
import EventList from "../../Components/events/EventList";
import EventsSearch from "./events-search";
import { useRouter } from "next/router";
//
const MainEvents = () => {
  const router = useRouter();

  const events = getAllEvents();

  function findEvent_handler(year, month) {
    if (!year && !month) return;
    const full_path = `/events/${year}/${month}`;
    router.push(full_path);
  }

  return (
    <div>
      <EventsSearch onSearch={findEvent_handler} />
      <EventList items={events} />
    </div>
  );
};

export default MainEvents;
