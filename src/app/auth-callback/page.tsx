import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: (result: { success: boolean }) => {
      if (result.success) {
        router.push(origin ? origin : "/dashboard");
      }
    },
  } as any);

  return null;
};

export default Page;
