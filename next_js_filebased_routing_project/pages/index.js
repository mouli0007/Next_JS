import React from "react";
import { getFeaturedEvents } from "../data";
import EventList from "../Components/events/EventList";
const IndexPage = () => {
  const featured_events = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <h2>View All the below events </h2>
      <EventList items={featured_events} />
    </div>
  );
};

export default IndexPage;
