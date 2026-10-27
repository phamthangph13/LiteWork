import { Plus } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/data/content";

export default function Faq() {
  return (
    <section id="hoi-dap" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pattern-dots pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(65%_60%_at_50%_20%,black,transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <Reveal variant="rise" y={24}>
          <SectionHeader
            index={7}
            align="center"
            label="Hỏi đáp"
            title="Câu hỏi thường gặp về AI Agent cho doanh nghiệp."
            desc="Những điều doanh nghiệp thường hỏi trước khi bắt đầu — từ phạm vi, thời gian đến bảo mật dữ liệu."
            className="items-center"
          />
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} variant="rise" delay={i * 0.04} y={18}>
              <details className="group h-full rounded-2xl border-2 border-ink bg-surface px-5 py-4 shadow-card transition-shadow duration-300 open:shadow-pop">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span className="pt-0.5 font-display text-[16.5px] font-semibold leading-snug tracking-tight">
                    {faq.q}
                  </span>
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border hairline bg-paper-deep text-ink-soft transition-transform duration-300 group-open:rotate-45">
                    <Plus size={14} aria-hidden />
                  </span>
                </summary>
                <p className="mt-3 max-w-prose text-[13.5px] leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
