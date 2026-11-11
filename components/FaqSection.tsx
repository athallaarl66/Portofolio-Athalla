import { Plus } from "lucide-react";
import { faqItems } from "@/lib/faq";

export const FaqSection = () => {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-layout">
        <header className="faq-heading">
          <h2 id="faq-title">A few things you might want to know.</h2>
          <p>On availability, day-to-day work, and how to get in touch.</p>
        </header>
        <div className="faq-items">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
