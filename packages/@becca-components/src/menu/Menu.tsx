import React, { Children, cloneElement } from "react";

interface Props {
  children: React.ReactElement[];
}

export function Menu({ children }: Props) {
  return (
    <ul role="listbox">
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          "aria-setsize": children.length,
          test: "hi",
        });
      })}
    </ul>
  );
}
