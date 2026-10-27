"use client";

import { useRef } from "react";
import {
  Bot,
  Workflow,
  Blocks,
  BookOpenCheck,
  ShieldCheck,
  UserCheck,
  CornerDownRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sticker } from "@/components/ui/Stickers";
import Reveal from "@/components/motion/Reveal";
import AgentGlyph from "@/components/sections/AgentGlyph";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "agent-dev": Bot,
  workflow: Workflow,
  integration: Blocks,
  rag: BookOpenCheck,
  guardrails: ShieldCheck,
  hitl: UserCheck,
};

export default function SolutionsBento() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="giai-phap" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index={1}
          label="Giải pháp AI Agent và tự động hóa quy trình"
          title="Một AI Agent tốt bắt đầu từ một bài toán được hiểu đúng."
          desc="Mỗi mảnh dưới đây là một khối năng lực được lắp theo bài toán của bạn — không bán gói trọn đời, chỉ có giải pháp đúng phạm vi."
        />
        <Sticker kind="bot" rot={7} float="a" className="absolute -top-2 right-6 hidden w-20 lg:block xl:w-24" ariaHidden />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {solutionsCards().map((card) => (
            <Reveal key={card.id} variant="scale" className={clsx(card.span)} duration={0.7}>
              <article
                data-cursor
                className={clsx(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-surface p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-pop md:p-7",
                  card.id === "hitl" && "md:flex-row md:items-center md:gap-10",
                )}
              >
                <div className="pattern-dots pointer-events-none absolute right-0 top-0 h-24 w-1/3 opacity-0 [mask-image:linear-gradient(to_bottom_left,black,transparent)] transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                <div className={clsx("flex items-start justify-between", card.id === "hitl" && "md:w-56 md:shrink-0 md:flex-col md:items-start")}>
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-mist text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-paper">
                    <Icon id={card.id} size={20} strokeWidth={1.8} />
                  </span>
                  {card.art ? <AgentGlyph kind={card.id} /> : null}
                </div>

                <div className={clsx("mt-5 flex flex-1 flex-col", card.id === "hitl" && "md:mt-0")}>
                  <h3 className="font-display text-[19px] font-semibold tracking-tight md:text-[21px]">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">
                    {card.desc}
                  </p>

                  {card.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft transition-colors group-hover:border-accent/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {card.points.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-[13px] text-ink-soft">
                          <CornerDownRight size={13} className="shrink-0 text-accent" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ id, size, strokeWidth }: { id: string; size: number; strokeWidth: number }) {
  const Cmp = icons[id] ?? Bot;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden />;
}

function solutionsCards() {
  return [
    {
      id: "agent-dev",
      span: "md:col-span-7",
      title: "AI Agent Development",
      desc: "Thiết kế và phát triển agent chuyên trách theo đúng quy trình nghiệp vụ của bạn — không phải chatbot làm nhanh, mà agent có vùng trách nhiệm rõ ràng.",
      points: ["Định vị vai trò agent trong quy trình", "Kịch bản xử lý theo nghiệp vụ", "Phạm vi hành động & giới hạn rõ ràng"],
      tags: [],
      art: true,
    },
    {
      id: "workflow",
      span: "md:col-span-5",
      title: "Workflow Automation",
      desc: "Kết nối các bước thủ công thành một luồng vận hành tự động, có kiểm soát điểm chạm của con người.",
      points: ["Chuẩn hóa quy trình trước khi tự động hóa"],
      tags: [],
      art: false,
    },
    {
      id: "integration",
      span: "md:col-span-4",
      title: "AI Integration",
      desc: "Gắn agent vào hệ thống bạn đang dùng, theo hướng API-first.",
      points: [],
      tags: ["CRM", "ERP", "Website", "Zalo", "Email", "Data Lake"],
      art: false,
    },
    {
      id: "rag",
      span: "md:col-span-4",
      title: "Tri thức nội bộ",
      desc: "Biến tài liệu, sổ tay và kho dữ liệu của bạn thành trợ lý tra cứu tức thời, trả lời kèm trích dẫn nguồn.",
      points: [],
      tags: ["RAG", "Citations", "No lock-in"],
      art: false,
    },
    {
      id: "guardrails",
      span: "md:col-span-4",
      title: "Guardrails & Monitoring",
      desc: "Agent chạy trong rào chắn: log đầy đủ, dashboard theo dõi, cảnh báo khi kết quả lệch chuẩn.",
      points: [],
      tags: ["Log", "Dashboard", "Alert"],
      art: false,
    },
    {
      id: "hitl",
      span: "md:col-span-12",
      title: "Human-in-the-loop",
      desc: "Điểm duyệt của con người được đặt tại những bước quan trọng — agent đề xuất, nghiệp vụ quyết định.",
      points: [],
      tags: ["Phê duyệt", "Xem lại", "Ghi nhận quyết định"],
      art: false,
    },
  ];
}
