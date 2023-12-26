import React from "react";

export const Test = (): JSX.Element => {
  return (
    <div>
      test
      <br />
      <img src="./logo.png" width={150} height={150} />
      <br />
      {process.env.BASE_URL}
    </div>
  );
};
