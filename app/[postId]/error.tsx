'use client'
import CustomError from "@/app/components/customError";
 
export default function Error({
  error
}: {
  error: Error
}) {
  return (
    <CustomError
      errorMessage="We are having trouble fetching this post."
      resolutionMessage="Try reloading the page."
    ></CustomError>
  )
}