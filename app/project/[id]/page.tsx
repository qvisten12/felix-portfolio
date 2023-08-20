const page = ({ params }: { params: { id: string } }) => {
  return <div>Project: {params.id}</div>;
};

export default page;
