'use client'

export default function SkeletonCard() {
  return (
    <div className="break-inside-avoid mb-6 rounded-xl border border-slate-200 overflow-hidden animate-pulse">
      <div className="aspect-video bg-slate-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-4 bg-slate-200 rounded w-4/5" />
        <div className="h-4 bg-slate-200 rounded w-3/5" />
        <div className="flex justify-between pt-2">
          <div className="h-3 bg-slate-200 rounded w-24" />
          <div className="h-3 bg-slate-200 rounded w-12" />
        </div>
      </div>
    </div>
  )
}
