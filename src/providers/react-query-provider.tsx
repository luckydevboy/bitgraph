"use client";

import { isServer, QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactNode } from "react";

// 1. Function to create the Query Client
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        gcTime: 1000 * 60 * 60,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

// 2. Function to get Query Client for server/browser
function getQueryClient() {
  if (isServer) {
    return makeQueryClient(); // Always create a new client on the server
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient(); // Reuse client in browser
    return browserQueryClient;
  }
}

// 3. Create the persister for sync storage
const persister = createSyncStoragePersister({
  storage: typeof window !== "undefined" ? window.localStorage : undefined, // Use localStorage on the client
});

// 4. ReactQueryProvider component with persistence
export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        console.log("Query data persisted successfully!");
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
