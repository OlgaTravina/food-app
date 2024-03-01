import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { AddComment, CommentResponse, Comment, Post, User } from "../types";



export const fetchUser = createAsyncThunk(
  "article/fetchUser",
  async (userId: number) => {
    const response = await fetch(
      `https://dummyjson.com/users/${userId}?select=firstName,lastName,image`
    );
    const user = (await response.json()) as User;

    return user;
  }
);


export const fetchComments = createAsyncThunk(
  "article/fetchPostComments",
  async (idPost: number) => {
    const response = await fetch(
      `https://dummyjson.com/comments/post/${idPost}`
    );
    const data = await response.json();

    return data.comments.map((comment: CommentResponse) => {
      return {
        id: comment.id,
        body: comment.body,
        postId: comment.postId,
        username: comment.user.username,
      };
    });
  }
);

export const fetchPost = createAsyncThunk(
  "article/fetchPost",
  async (idPost: string, { dispatch }) => {
    const response = await fetch(
      `https://dummyjson.com/posts/${idPost}?select=title,id,body,userId,tags,reactions`
    );
    const post = (await response.json()) as Post;

    dispatch(fetchUser(post.userId));

    dispatch(fetchComments(post.id));

    return post;
  }
);

export const addPostComment = createAsyncThunk(
  "article/addPostComment",
  async (newComment: AddComment) => {
    const response = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });
    const addedComment = (await response.json()) as CommentResponse;

    return {
      id: addedComment.id,
      body: addedComment.body,
      postId: addedComment.postId,
      username: addedComment.user.username,
    };
  }
);


export const appPostCommentSlice = createSlice({
  name: "article",
  initialState: {
    post: {} as Post,
    postUser: {} as User,
    comments: [] as Array<Comment>,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });

    builder.addCase(addPostComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.postUser = action.payload;
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.comments = [];
      state.postUser = {} as User
    });
  },
});
// export const {} = appPostCommentSlice.actions;

export default appPostCommentSlice.reducer;