import { useEffect } from "react";

const SERVICE_FEE = 10.25;
const ORDER_PROCESSING_FEE = 2.95;

type Props = {
    showPrice: number;
    multiplier: number;
}

export default function TotalSection({ showPrice, multiplier }: Props) {
  const totalTicketPrice = (showPrice * multiplier).toFixed(2);
  const totalServiceFee = (SERVICE_FEE * multiplier).toFixed(2);
  const subTotal = (parseFloat(totalServiceFee) + parseFloat(totalTicketPrice) + ORDER_PROCESSING_FEE).toFixed(2);

  return (
    <section className="border-2 rounded border-slate-300 border-solid p-8 m-2 bg-white">
      <h2 className="font-bold">Total ${subTotal}</h2>
      <p>
        Tickets: ${showPrice} X {multiplier} = ${totalTicketPrice}
      </p>
      <h3 className="font-bold">Fees</h3>
      <p>
        Service Fee: ${SERVICE_FEE} X {multiplier} = ${totalServiceFee}
      </p>
      <p>
        Order Processing Fee: ${ORDER_PROCESSING_FEE}
      </p>
      <input type="text" hidden defaultValue={subTotal} name="subTotal" />
      <input type="submit" value="Buy Tickets" className="rounded-full bg-slate-200 px-8" />
    </section>
  );
}
