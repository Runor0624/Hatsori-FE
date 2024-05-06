"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
};

export default function ReactQuery({ children }: Props) {
  const [client] = React.useState(
    new QueryClient({  
      defaultOptions: { 
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}