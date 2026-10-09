"use client";
import { useState } from "react";
import { storefront } from "@/data/content";

const Block = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-md bg-line ${className}`} />
);

function Preview({ ui }: { ui: string }) {
  if (ui === "list")
    return (
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-2"><Block className="h-20" /><Block className="h-2 w-3/4" /><Block className="h-2 w-1/2" /></div>
        ))}
      </div>
    );
  if (ui === "detail")
    return (
      <div className="grid grid-cols-2 gap-4">
        <Block className="h-32" />
        <div className="space-y-2"><Block className="h-3 w-4/5" /><Block className="h-2" /><Block className="h-2 w-2/3" /><div className="h-8 w-24 rounded-md bg-accent" /></div>
      </div>
    );
  if (ui === "cart")
    return (
      <div className="space-y-2">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-3"><Block className="h-10 w-10 shrink-0" /><Block className="h-2 flex-1" /><Block className="h-6 w-14" /></div>
        ))}
        <div className="ml-auto h-8 w-28 rounded-md bg-accent" />
      </div>
    );
  return (
    <div className="max-w-[12rem] space-y-2"><Block className="h-8" /><Block className="h-8" /><div className="h-8 rounded-md bg-accent" /></div>
  );
}

export default function Storefront() {
  const [active, setActive] = useState(0);
  const item = storefront[active];
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-warm" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div role="tablist" aria-label="What I build into a storefront" className="flex flex-wrap gap-1 border-b border-line p-2">
        {storefront.map((s, i) => (
          <button
            key={s.tab} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${i === active ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"}`}
          >{s.tab}</button>
        ))}
      </div>
      <div role="tabpanel" className="space-y-5 p-5">
        <Preview ui={item.ui} />
        <p className="text-sm text-muted">{item.text}</p>
      </div>
    </div>
  );
}
