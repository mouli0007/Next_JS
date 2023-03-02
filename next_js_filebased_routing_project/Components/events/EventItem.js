import React from "react";
import Link from "next/link";
import event_item_styles from "../../styles/Event-item.module.css";
import Button from "../ui/button";
const EventItem = ({ event }) => {
  const { title, image, date, location, id } = event;

  const human_readable_date = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const format_address = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={event_item_styles.item}>
      <img width={300} src={"/" + image} alt={title} />
      <div className={event_item_styles.content}>
        <div className={event_item_styles.summary}>
          <h2>{title}</h2>
          <div className={event_item_styles.date}>
            <time>{human_readable_date}</time>
          </div>
          <div className={event_item_styles.address}>
            <address>{format_address}</address>
          </div>
        </div>
        <div className={event_item_styles.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
        <br />
      </div>
    </li>
  );
};

export default EventItem;
