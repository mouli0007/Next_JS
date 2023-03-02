import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data";
import EventList from "../../Components/events/EventList";
const SlugEvent = () => {
  const router = useRouter();

  const { slug: filterData } = router.query;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p className="center">Invaid filters Please Adjust your values</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">Noo Events found for the Chosen Filter</p>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default SlugEvent;
