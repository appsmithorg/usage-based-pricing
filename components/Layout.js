import { NextSeo } from "next-seo";

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title="Usage Based Pricing Done Right"
        description="Discover companies that put customers first with usage-based pricing"
      />
      <div className="">{children}</div>
    </>
  );
}
