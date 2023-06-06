"use client";

import React, { useState } from "react";
import { Show } from "./types";

export default function ShowSection({onShowChange, shows, onTicketChange}: any) {  
  const [selectedShow, setSelectedShow] = useState(0);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value);
    
    setSelectedShow(index);
    onShowChange(shows[index].price)
  };

  const handleTicketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ticketNumber = parseInt(e.target.value);

    setNumberOfTickets(ticketNumber);
    onTicketChange(ticketNumber);
  }

  return (
    <section className="border-2 rounded border-slate-300 border-solid p-8 m-2 bg-white">
      <h2 className="font-bold">Upcoming Shows</h2>
      <select onChange={handleShowChange} value={selectedShow} className="border-2 border-solid border-indigo-500">
        {shows.map((show: Show, index: number) => (
          <option value={index} key={show.id}>
            {show.name}
          </option>
        ))}
      </select>
      <section>
        <p>Price: ${shows[selectedShow].price}</p>
      </section>
      <section className="flex">
        <h1>Number of Tickets:</h1>
        <select onChange={handleTicketChange} value={numberOfTickets} className="border-2 border-solid border-indigo-500">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
      </section>
    </section>
  );
}
