"use client";

import DeliverySection from "./components/DeliverySection";
import PaymentSection from "./components/PaymentSection";
import TotalSection from "./components/TotalSection";
import ShowSection from "./components/ShowSection";
import { useState } from "react";

const showsArray = [
  { name: "Hamlet", price: 120, id: 1 },
  { name: "Romeo & Juliet", price: 20.99, id: 2 },
  { name: "King Lear", price: 50, id: 3 },
];

export default function Home() {
  const [showPrice, setShowPrice] = useState(showsArray[0].price);
  const [ticketMultiplier, setTicketMultiplier] = useState(1);

  return (
    <main className="h-screen">
      <form action={"/API/submit-form"} method="GET">
        <ShowSection
          onShowChange={setShowPrice}
          shows={showsArray}
          onTicketChange={setTicketMultiplier}
        />
        <section className="flex justify-between">
          <div>
            <DeliverySection />
            <PaymentSection />
          </div>
          <div>
            <TotalSection showPrice={showPrice} multiplier={ticketMultiplier} />
          </div>
        </section>
      </form>
    </main>
  );
}
