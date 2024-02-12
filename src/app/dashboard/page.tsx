import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return <div>Page</div>;
};

export default Page;
