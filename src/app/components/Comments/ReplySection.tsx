import clsx from "clsx"
import { forwardRef, useState } from "react"
import { usePostData } from "~/context-modules/PostContext"
import { useRootContext } from "~/context-modules/RootContext"
import Comment from "./Comment"

type Props = {
  parentCommentId: string
}

const ReplySection = forwardRef<HTMLDivElement, Props>(function ReplyComment(
  { parentCommentId },
  ref,
) {
  const {
    rootState: { user },
  } = useRootContext()
  const { postData } = usePostData()
  const [isEditing, setIsEditing] = useState(false)
  const commentKey = [postData?.id, user?.id].join("-")
  return (
    <div className="my-2 space-y-4" ref={ref}>
      <div className="flex space-x-4">
        <img
          className={clsx("my-1 inline-block h-8 w-8 rounded-full", {
            "border-indigo-500 outline outline-2 outline-offset-2 outline-indigo-500":
              isEditing,
          })}
          src={user?.profilePicture || ""}
          alt="profile"
        />
        {isEditing ? (
          <Comment
            setIsEditing={setIsEditing}
            uniqueKey={commentKey}
            postId={postData?.id || ""}
            parentCommentId={parentCommentId}
          />
        ) : (
          <input
            type="text"
            name="new-comment"
            id="new-comment"
            className="block w-full rounded-md border-gray-300 shadow-sm hover:border-gray-400 hover:bg-slate-50/50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Add a comment..."
            onFocus={() => setIsEditing(true)}
          />
        )}
      </div>
    </div>
  )
})

export default ReplySection
