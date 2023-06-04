import DeliverySection from "./components/DeliverySection";
import PaymentSection from "./components/PaymentSection";
import TotalSection from "./components/TotalSection";

export default function Home() {
  return (
    <main>
      <DeliverySection />
      <PaymentSection />
      <TotalSection />
    </main>
  );
}
