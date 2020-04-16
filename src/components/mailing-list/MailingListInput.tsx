import React from "react";
import { Input } from "antd";
import jsonp from "jsonp";
import { Typography, message } from "antd";
const { Title } = Typography;

export default () => {
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [submitting, setSubmitting] = React.useState<boolean>(false);

  const onSubmit = (value: string) => {
    if (value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      jsonp(
        `https://ceimeileproductions.us19.list-manage.com/subscribe/post-json?u=0ebc7eec90e214ebdcfe9117a&amp;id=4d02528246&EMAIL=${value}`,
        { param: "c" },
        (err, data) => {
          setSubmitting(true);
          if (
            data.msg.includes(
              "already subscribed" || data.status !== "success" || err
            )
          ) {
            message.error("Oops, something went wrong. Please try again.", 3);
          } else {
            message.success("Thanks for joining our mailing list!", 3);
            setSubmitted(true);
          }
          setSubmitting(false)
        }
      );
    } else message.error("Please enter a valid email address.", 3);
  };

  const { Search } = Input;
  return (
    <>
      <Title level={3} className="mailing-list-text">Join our mailing list!</Title>
      <Search
        placeholder="Email address"
        enterButton="Join"
        size="large"
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        loading={submitting}
        onSearch={onSubmit}
        disabled={submitted}
      />
    </>
  );
};
