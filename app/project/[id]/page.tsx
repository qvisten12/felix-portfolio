import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Project - ${params.id}`,
  };
};

// https://www.builder.io/blog/routing-seo-metadata-nextjs-13

const page = ({ params }: { params: { id: string } }) => {
  return <div>Project: {params.id}</div>;
};

export default page;
