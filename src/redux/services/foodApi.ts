import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IFood, ITypes } from '../../types/types'

export const foodApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://62cb35b41eaf3786ebb6d4e1.mockapi.io/api/'}),
    tagTypes: ['Food'],
    endpoints: (build) => ({
        getFood: build.query<IFood[], number | symbol>({
            query: (foodType:number) => ({
                url: `items?type=${foodType}`
            }),
            providesTags: result => ['Food']
        }),
        getPopularFood: build.query<IFood[], boolean | symbol>({
            query: (count:boolean) => `items${count ? '?sortBy=rating&order=desc' : '?sortBy=rating&order=desc&page=1&limit=5'}`,
            providesTags: result => ['Food']
        }),
        getTypes: build.query<ITypes[], number>({
            query: () => `types`,
            providesTags: result => ['Food']
        }),
        getOneFood: build.query<IFood[], number | symbol>({
            query: (foodId:number) => ({
                url: `items/${foodId}`
            }),
            providesTags: result => ['Food']
        }),
        createFood: build.mutation<IFood, IFood>({
            query: (food) => ({
                url: `items`,
                method: 'POST',
                body: food
            }),
            invalidatesTags: ['Food']
        }),
    })
})

export const {useGetFoodQuery, useGetPopularFoodQuery, useGetTypesQuery, useCreateFoodMutation, useGetOneFoodQuery} = foodApi
