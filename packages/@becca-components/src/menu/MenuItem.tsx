import React from "react";

interface Props {
  children: React.ReactText;
}

export function MenuItem({ children }: Props) {
  return <li role="option">{children}</li>;
}
