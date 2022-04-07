import { ReplyIcon } from "@heroicons/react/outline"
import { useBoolean } from "usehooks-ts"
import { useEffect, useRef } from "react"
import useOnClickOutside from "~/hooks/useOnClickOutside"
import { useFetcher } from "remix"
import LikeIcon from "../icons/Like"
import { COMMENT_ACTIONS } from "~/utils/constants"
import { CommentActionButton } from "../ActionButton"
import { getHTML } from "~/routes/interaction/$id"
import { CustomElement, CustomText } from "~/types/editor"
import ReplySection from "./ReplySection"
import Comment from "../icons/Comment"

type Props = {
  parentCommentId: string
  replyCount?: number
}

const ReplyButton = ({ parentCommentId, replyCount = 0 }: Props) => {
  const fetcher = useFetcher()

  const { value, setFalse, toggle } = useBoolean(false)
  const btnRef = useRef(null)
  const commentRef = useRef(null)

  useEffect(() => {
    if (value === true) {
      fetcher.submit(
        {
          parentCommentId,
        },
        {
          method: "post",
          action: "/loader/fetch-comments",
          replace: true,
        },
      )
    }
  }, [parentCommentId, value])

  useOnClickOutside([btnRef, commentRef], setFalse)
  return (
    <div className="w-full">
      <button
        className="flex items-center space-x-1 rounded-sm p-1 hover:bg-gray-400/20"
        onClick={() => {
          toggle()
        }}
        ref={btnRef}
      >
        <Comment height={16} width={16} />
        {replyCount > 0 && <span>{replyCount}</span>}
      </button>
      {value && (
        <div className="my-2 space-y-5" ref={commentRef}>
          <ReplySection parentCommentId={parentCommentId} />
          {fetcher.data?.data?.length > 0 &&
            fetcher.data?.data?.map((comment: any) => (
              <div key={comment.id} className="flex items-start space-x-3">
                <div className="mb-1 flex items-center space-x-3">
                  <img
                    className="mt-1 inline-block h-6 w-6 rounded-full"
                    src={comment.CreatedBy.profilePicture || ""}
                    alt="profile"
                  />
                </div>
                <div className="flex-1 text-sm text-gray-600">
                  <div className="mb-1 text-sm font-semibold text-gray-800 group-hover:text-gray-900">
                    {comment.CreatedBy.name}
                  </div>
                  {getHTML(
                    JSON.parse(comment.comment as string) as unknown as (
                      | CustomElement
                      | CustomText
                    )[],
                  )}
                  <div className="mt-2 flex space-x-2">
                    <CommentActionButton
                      btnProps={{
                        className:
                          "flex items-center rounded-sm p-1 hover:bg-gray-400/20 space-x-1",
                      }}
                      formPayload={{
                        commentId: comment.id,
                      }}
                      actionName={
                        comment?.reactedByLoggedInUser
                          ? COMMENT_ACTIONS.UNDO_LIKE
                          : COMMENT_ACTIONS.LIKE_COMMENT
                      }
                    >
                      <LikeIcon
                        height="16"
                        width="16"
                        variant={
                          comment?.reactedByLoggedInUser ? "filled" : "outline"
                        }
                      />
                      <span>{comment.reactionsCount}</span>
                    </CommentActionButton>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default ReplyButton
