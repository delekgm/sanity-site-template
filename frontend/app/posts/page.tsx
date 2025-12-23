import { AllPosts } from "@/components/Posts"
import { Suspense } from "react"

const PostsIndex = async () => {
  return (
      <section className="pt-24">
      <Suspense>{await AllPosts()}</Suspense>
      </section>
  )
}

export default PostsIndex