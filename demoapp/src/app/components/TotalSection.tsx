export default function TotalSection({showPrice}: any) {
    return (
        <section className="border-2 rounded border-slate-300 border-solid p-8 m-2 bg-white">
          <h2 className="font-bold">Total</h2>
            <p>${showPrice}</p>
        </section>
    );
  }
  