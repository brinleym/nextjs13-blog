import { PostType } from '@/app/types';

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

/* Create routes based on a post's id */
export async function generateStaticParams() {
  const posts = await fetch(POSTS_API).then((res) => res.json());
  const postIds = posts.map((post: PostType) => ({
    postId: String(post.id),
  }));
  return postIds;
}

/* Fetch a post using its id */
async function getPost(id: string) {
  const res = await fetch(`${POSTS_API}/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch post with id: ${id}`)
  }
  return res.json();
}

export default async function Page({ params }: { params: { postId: string } }) {
  const post: PostType = await getPost(params.postId);
  return (
    <div>
      <h1 
				className="text-2xl font-serif font-bold"
			>
				{post.title[0].toUpperCase() + post.title.slice(1)}
			</h1>
      <div className="mt-2">{post.body}</div>
    </div>
  )
}