import { NextSeo } from "next-seo";
import * as React from "react";

const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      {children}
    </>
  );
};
export default PageWrapper;

interface PageWrapperProps {
  title: string;
  author?: string;
  description?: string;
  children: React.ReactNode;
}
