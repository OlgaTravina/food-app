import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CommentResponse,Comment,Recipe } from '../types'

export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], number>({
      query: (count) => `comments?limit=${count}`,
	    transformResponse: (response:any) => {
        return  response.comments.map((comment: CommentResponse) => {
            return {
              id: comment.id,
              body: comment.body,
              postId: comment.postId,
              username: comment.user.username,
            };
          })
      },
    }),
    getFirstThreeTheBestRatingsRecipes: builder.query<Recipe[],void>({
        query: () => `recipes?limit=50&select=name,prepTimeMinutes,cookTimeMinutes,tags,image,rating`,
      transformResponse: (response:any) => {
          return response.recipes
              .toSorted((r1: Recipe, r2: Recipe) => r2.rating - r1.rating)
              .slice(0, 3);
        },
      }),
 
    }),
    
    
})

export const { useGetCommentsQuery, useGetFirstThreeTheBestRatingsRecipesQuery } = foodApi