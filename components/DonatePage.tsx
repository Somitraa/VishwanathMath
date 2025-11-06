"use client";

import { useRouter } from "next/navigation";

export default function DonatePage() {
  const router = useRouter();

  // ✅ Function to go back to home
  const handleReturn = () => {
    router.push("/"); // navigates back to homepage
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          🙏 Support Vishwanath Math
        </h1>

        <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
          Your kind contribution helps us continue our mission of spiritual growth,
          community service, and the preservation of sacred traditions.
        </p>

        {/* 🏦 Bank Details */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 border border-primary/20 text-left">
          <h2 className="text-2xl font-bold text-primary mb-4">🏦 Bank Details</h2>
          <ul className="space-y-3 text-lg text-foreground/80">
            <li>
              <strong>Bank Name:</strong> STATE BANK OF INDIA
            </li>
            <li>
              <strong>Account Number:</strong> 63023256607
            </li>
            <li>
              <strong>IFSC Code:</strong> SBIN0030076
            </li>
            <li>
              <strong>Branch:</strong> BASODA
            </li>
          </ul>
        </div>

        {/* 📱 UPI Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-primary/20 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">📱 UPI Payment</h2>
          <p className="text-lg text-foreground/70 mb-4">
            You can also donate directly via UPI using the QR code or UPI ID below.
          </p>

          <div className="flex flex-col items-center gap-4">
            <img
              src="/upiqr.jpg"
              alt="UPI QR Code"
              className="w-48 h-48 border-2 border-primary rounded-xl shadow-md"
            />
            <p className="text-xl font-semibold text-primary">
              UPI ID: <span className="text-foreground">8989946999@ybl</span>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-sm text-muted-foreground mt-10">
          Every contribution counts 🙏 — Thank you for supporting our mission.
        </p>

        {/* ⬅️ Return to Home Button */}
        <button
          onClick={handleReturn}
          className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          ⬅️ Return to Home
        </button>
      </div>
    </section>
  );
}
