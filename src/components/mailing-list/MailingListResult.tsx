import React from "react";
import { Result, Button } from "antd";

const SuccessProps = {
  title: "Thanks for joining our mailing list!",
  extra: undefined
};

const ErrorProps = {
  title: "Oops, something went wrong.",
  subTitle: "Please refresh and try again.",
  extra: (
    <Button
      type="primary"
      key="refresh"
      onClick={() => window.location.reload()}
    >
      Try again
    </Button>
  )
};

export default (props: { resultType?: "success" | "error" }) => {
  let resultProps = props.resultType === "success" ? SuccessProps : ErrorProps;
  return (
    <>
      <Result
        status={props.resultType}
        title={resultProps.title}
        extra={[resultProps.extra]}
      />
    </>
  );
};
