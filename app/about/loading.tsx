export default function Loading() {
  return (
    <div>
      <div className="space-y-3 animate-pulse flex flex-col">
        <div className="bg-slate-600/50 h-7 w-1/4 rounded-lg"></div>
        {[...Array(10).fill(null)].map((value: null, index: number) => {
          return (
            <div
              key={index} 
              className="bg-slate-400/50 h-3 w-full rounded-lg"
            >
            </div>
          )
        })}
      </div>           
    </div>
  )
}