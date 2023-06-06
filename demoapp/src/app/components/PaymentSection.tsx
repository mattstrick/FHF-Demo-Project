export default function PaymentSection() {
    return (
        <section className="border-2 rounded border-slate-300 border-solid p-8 m-2 bg-white">
          <h2 className="font-bold">Payment</h2>
          <section>
            <input type="text" name="creditCard" required placeholder="Credit Card" className="border-b-2 border-solid border-indigo-500" /><br />
            <input type="text" name="expMonth" maxLength={2} required placeholder="Expiration Month" className="border-b-2 border-solid border-indigo-500" />{" "}/{" "}
            <input type="text" name="expYear" maxLength={4} required placeholder="Expiration Year" className="border-b-2 border-solid border-indigo-500" /><br />
            <input type="text" name="cvv" maxLength={3} required placeholder="CVV" className="border-b-2 border-solid border-indigo-500" />
          </section>
        </section>
    );
  }
  