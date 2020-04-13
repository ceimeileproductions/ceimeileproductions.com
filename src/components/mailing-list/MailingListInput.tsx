import React from "react";
import { Input } from "antd";
import MailingListResult from "./MailingListResult";
import jsonp from "jsonp";

export default () => {
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [resultType, setResultType] = React.useState<"success" | "error">();

  const onSubmit = (value: string) => {
    jsonp(
      `https://ceimeileproductions.us19.list-manage.com/subscribe/post-json?u=0ebc7eec90e214ebdcfe9117a&amp;id=4d02528246&EMAIL=${value}`,
      { param: "c" },
      (err, data) => {
        setSubmitted(true);
        if (
          data.msg.includes(
            "already subscribed" || data.status !== "success" || err
          )
        ) {
          setResultType("error");
        } else {
          setResultType("success");
        }
      }
    );
  };

  const { Search } = Input;
  return (
    <>
      {!submitted ? (
        <Search
          placeholder="Email address"
          enterButton="Join"
          size="large"
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          loading={submitted}
          onSearch={onSubmit}
        />
      ) : (
        <MailingListResult key={resultType} resultType={resultType} />
      )}
    </>
  );
};
