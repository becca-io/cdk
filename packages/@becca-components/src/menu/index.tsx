import React from "react";

interface Props {
  title: string;
}
export const Sample = ({ title }: Props) => {
  return <div>{title}</div>;
};
