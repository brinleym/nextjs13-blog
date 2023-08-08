import { PostType } from '@/app/types'
import Link from 'next/link'

const POSTS_API = "https://jsonplaceholder.typicode.com/posts/";

async function getData() {
  const res = await fetch(POSTS_API);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Posts() {

  const posts = await getData();
  
  return (
    <div>
      {posts.map((post: PostType, index: number) => 
        <div 
          key={index}
          className="flex flex-col card p-4 rounded-lg drop-shadow-sm mb-4">
          <h2 className="font-serif font-bold">
						{post.title[0].toUpperCase() + post.title.slice(1)}
					</h2>
          <div>{post.body.slice(0, 100)}...</div>
					<Link 
            href={`/${String(post.id)}`}
            className="pointer-cursor mt-2 hover:translate-x-px hover:drop-shadow-sm drop-shadow-xs self-end max-w-fit py-1 px-3 bg-stone-300 rounded-lg"
					>
						Read →
					</Link>
        </div>
      )}
    </div>
  )
}