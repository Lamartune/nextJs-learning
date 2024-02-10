import React from "react";

const details = ({ params }: { params: { productId: string } }) => {
  return <div>details about the {params.productId}</div>;
};

export default details;
