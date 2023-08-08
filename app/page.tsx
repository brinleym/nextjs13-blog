import { Suspense } from "react"
import PostsLoadingSkeleton from "@/app/components/postsLoadingSkeleton"
import Posts from "@/app/components/posts"

export default function Home() {
  return (
    <div>
			<Suspense fallback={<PostsLoadingSkeleton></PostsLoadingSkeleton>}>
				<Posts></Posts>
			</Suspense>
    </div>
  )
}