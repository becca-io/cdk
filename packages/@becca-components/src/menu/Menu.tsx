import React, { cloneElement } from "react";

interface Props {
  children: React.ReactElement[];
}

function Menu({ children }: Props) {
  return (
    <ul>
      {React.Children.map(children, (child, index) => {
        return cloneElement(child, {});
      })}
    </ul>
  );
}
