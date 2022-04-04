import clsx from "clsx"
import { useCallback, useState } from "react"
import { usePostData } from "~/context/post-context"
import { useRootContext } from "~/context/root-context"
import CommentInput from "./CommentInput"

type Props = {}

type CommentInputProps = {
  onFocus: React.FocusEventHandler<HTMLInputElement>
}

const CommentInputPlaceholder = ({ onFocus }: CommentInputProps) => {
  return (
    <input
      type="text"
      name="new-comment"
      id="new-comment"
      className="block w-full rounded-md border-gray-300 shadow-sm hover:border-gray-400 hover:bg-slate-50/50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="Add a comment..."
      onFocus={onFocus}
    />
  )
}

const CommentsSection = (props: Props) => {
  const {
    rootState: { user, postSlug },
    openAuthModal,
  } = useRootContext()
  const { postData } = usePostData()
  const [isEditing, setIsEditing] = useState(false)
  const commentKey = [postData?.id, user?.id].join("-")
  const showCommentInput = useCallback(() => {
    setIsEditing(true)
  }, [setIsEditing])

  return (
    <div className="mb-4 space-y-4">
      <div>Discussion</div>
      {user?.id ? (
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
            <CommentInput
              setIsEditing={setIsEditing}
              uniqueKey={commentKey}
              postId={postData?.id || ""}
            />
          ) : (
            <CommentInputPlaceholder onFocus={showCommentInput} />
          )}
        </div>
      ) : (
        <CommentInputPlaceholder
          onFocus={() => openAuthModal(postSlug ?? "")}
        />
      )}
    </div>
  )
}

export default CommentsSection
