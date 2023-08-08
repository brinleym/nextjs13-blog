export default function PostsLoadingSkeleton() {
	return (
		<div>
      {[...Array(10).fill(null)].map((value: null, index: number) => {
        return (
          <div key={index} className="space-y-3 bg-stone-200/50 animate-pulse flex flex-col p-4 rounded-lg drop-shadow-sm mb-4">
            <div className="bg-slate-600/50 h-5 w-1/2 rounded-lg"></div>
            <div className="bg-slate-400/50 h-3 w-3/5 rounded-lg"></div>
            <div className="bg-slate-400/50 h-3 w-5/6 rounded-lg"></div>
            <div className="bg-slate-400/50 h-3 w-5/6 rounded-lg"></div>
            {/* Create loading skeleton for Read button */}
						<div className="mt-2 p-4 self-end bg-stone-300/50 h-7 w-2/12 rounded-lg drop-shadow-xs"></div>
          </div>            
        )
      })}
    </div>
	)
}