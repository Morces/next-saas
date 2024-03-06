import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { trpc } from "../_trpc/client";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined);

  useEffect(() => {
    if (!isLoading && data && data.success) {
      router.push(origin ? origin : "/dashboard");
    }
  }, [isLoading, data, router, origin]);
};

export default Page;
