import { ArrowRight } from 'lucide-react'

export default function LatestNewsSkeleton() {
  return (
    <section className="py-12 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-4">
              Kabar <span className="text-[#00AEEF]">Ekosistem</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Berita terkini dari Promedia dan seluruh jaringan mitra di Indonesia.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-300 shadow-sm opacity-70">
            Lihat Semua Berita <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col animate-pulse"
            >
              <div className="relative aspect-[4/3] bg-slate-200/60"></div>
              <div className="p-3 md:p-6 flex-1 flex flex-col gap-3 md:gap-4">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-6 md:w-8 bg-slate-200 rounded"></div>
                    <div className="h-3 md:h-4 w-12 md:w-16 bg-slate-200 rounded"></div>
                  </div>
                  <div className="h-3 md:h-5 w-16 md:w-24 bg-slate-100 rounded"></div>
                </div>
                <div className="space-y-2 mt-1">
                  <div className="h-3 md:h-5 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 md:h-5 bg-slate-200 rounded w-11/12"></div>
                  <div className="h-3 md:h-5 bg-slate-200 rounded w-4/5"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
