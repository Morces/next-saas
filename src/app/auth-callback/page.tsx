import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
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
  });
};

export default Page;
