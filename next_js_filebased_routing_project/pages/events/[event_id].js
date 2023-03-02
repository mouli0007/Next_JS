import React from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../data";
import EventSummary from "../../Components/event-detail/event-summary";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventContent from "../../Components/event-detail/event-content";

const SingleEvent = () => {
  const router = useRouter();
  const { event_id } = router.query;
  const event_ = getEventById(event_id);

  if (!event_) {
    return (
      <>
        <h3> There is no such event</h3>
      </>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event_.title} />
      <EventLogistics
        date={event_.date}
        address={event_.location}
        image={event_.image}
        imageAlt={event_.title}
      />
      <EventContent>
        <p>{event_.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default SingleEvent;
