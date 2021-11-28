import type { MetaFunction } from "remix";


// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "DesignBits - Home",
    description: "Welcome to DesignBits!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <></>
  );
}
