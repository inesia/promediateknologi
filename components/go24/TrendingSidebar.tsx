'use client'

import { TRENDING_ITEMS } from './newsData'

interface TrendingSidebarProps {
  className?: string
}

export default function TrendingSidebar({ className = '' }: TrendingSidebarProps) {
  return (
    <aside className={className}>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#001A2C] mb-4 flex items-center gap-2">
          <span className="w-2 h-5 rounded bg-[#00AEEF]" />
          Trending Now
        </h3>
        <p className="text-sm text-slate-500 mb-4">Most Read · Berdasarkan analitik</p>
        <ul className="space-y-4">
          {TRENDING_ITEMS.map((item) => (
            <li key={item.rank}>
              <a
                href="#"
                className="group flex gap-3 items-start"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg font-black text-slate-400 group-hover:bg-[#00AEEF] group-hover:text-white transition-colors">
                  {item.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[#001A2C] text-sm leading-snug group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.media}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
