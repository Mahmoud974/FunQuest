import React from "react";

type Props = {
  params: { slug: string };
};
export default function Ok({ params }: Props) {
  const { slug } = params;

  return <div>page + {slug}</div>;
}
