"use client";

import { useState } from "react";

export default function ShowSection({onShowChange, shows}: any) {  
  const [selectedShow, setSelectedShow] = useState(0);

  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value);
    setSelectedShow(index);
    onShowChange(shows[index].price)
  };

  return (
    <section className="border-2 rounded border-slate-300 border-solid p-8 m-2 bg-white">
      <h2 className="font-bold">Show</h2>
      <select onChange={handleShowChange}>
        {shows.map((show, index: number) => (
          <option value={index} key={show.id}>
            {show.name}
          </option>
        ))}
      </select>

      <section>
        <h1>{shows[selectedShow].name}</h1>
        <p>Price: ${shows[selectedShow].price}</p>
      </section>
    </section>
  );
}
