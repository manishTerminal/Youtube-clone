import React from "react";
import user from "../assets/img/user.png";

const commentData = [
  {
    name: "Manish Kumar",
    comment: "this is a dummy main comment this video.",
    reply: [
      {
        name: "Rahul Kumar",
        comment: "this is a dummy main comment this video.",
        reply: [],
      },
      {
        name: "Manish Kumar",
        comment: "this is a dummy main comment this video.",
        reply: [
          {
            name: "Saket Kumar",
            comment: "this is a dummy main comment this video.",
            reply: [
              {
                name: "Manish Kumar",
                comment: "this is a dummy main comment this video.",
                reply: [],
              },
              {
                name: "koo Kumar",
                comment: "this is a dummy main comment this video.",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Manish Kumar",
    comment: "this is a dummy main comment this video.",
    reply: [],
  },
  {
    name: "keshav Kumar",
    comment: "this is a dummy main comment this video.",
    reply: [],
  },
  {
    name: "Manish Kumar",
    comment: "this is a dummy main comment this video.",
    reply: [],
  },
  {
    name: "Hari Kumar",
    comment: "this is a dummy main comment this video.",
    reply: [
      {
        name: "Manish Kumar",
        comment: "this is a dummy main comment this video.",
        reply: [
          {
            name: "Manish Kumar",
            comment: "this is a dummy main comment this video.",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Manish Kumar",
    comment: "this is a dummy main comment this video.",
    reply: [
      {
        name: "Manish Kumar",
        comment: "this is a dummy main comment this video.",
        reply: [],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, comment, reply } = data;

  return (
    <div className="flex mt-5">
      <div className="mr-2">
        <img className="w-8 h-8" src={user} />
      </div>
      <div>
        <h2 className="font-medium">{name}</h2>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comments  data={comment} />
          <div className="border border-l-black ml-6 mb-2">
            <CommentList comments={comment.reply} />
          </div>
        </div>
      ))}
    </>
  );
};

const CommentContainer = () => {
  return (
    <>
      <h2 className="text-xl font-bold mt-2">Comments:</h2>
      <CommentList comments={commentData} />
    </>
  );
};

export default CommentContainer;
