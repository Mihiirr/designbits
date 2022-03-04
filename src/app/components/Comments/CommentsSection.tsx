import clsx from "clsx"
import { useState } from "react"
import { usePostData } from "~/context/postContext"
import { useRootContext } from "~/context/root"
import NewComment from "./NewComment"

type Props = {}

const CommentsSection = (props: Props) => {
  const {
    rootState: { user },
  } = useRootContext()
  const { postData } = usePostData()
  const [isEditing, setIsEditing] = useState(false)
  const commentKey = [postData?.id, user?.id].join("-")
  return (
    <div className="mb-4 space-y-4">
      <div>Discussion</div>
      <div className="flex space-x-4">
        <img
          className={clsx("my-1 inline-block h-8 w-8 rounded-full", {
            "border-emerald-500 outline outline-2 outline-offset-2 outline-emerald-500":
              isEditing,
          })}
          src={user?.profilePicture || ""}
          alt="profile"
        />
        {isEditing ? (
          <NewComment
            setIsEditing={setIsEditing}
            uniqueKey={commentKey}
            postId={postData?.id || ""}
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
}

export default CommentsSection
