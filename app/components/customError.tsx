export default function CustomError(
  { errorMessage, resolutionMessage}: 
  { errorMessage: string, resolutionMessage: string}
) 
{
  return (
    <div className="errorCard rounded-lg p-4 drop-shadow-sm">
      <h2 className="text-xl font-bold text-red-900">Error</h2>
      <p className="text-red-900">
        {`${errorMessage} Rest assured we are working to solve this issue.`}
      </p>
      <div className="bg-stone-100 rounded-lg mt-2 border px-2 py-1">
        <p className="font-bold text-slate-900">Potential Fix</p>
        <p className="text-slate-700">{resolutionMessage}</p>
      </div>
    </div>
  )
}