"use client"
import {
QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client
const queryClient = new QueryClient()

export default function Provider({children}:{children: ReactNode}) {
  return (
     <QueryClientProvider client={queryClient}>
        {children}
    
     </QueryClientProvider>
  )
}
