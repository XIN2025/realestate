import MailtoLink from "./MailtoLink";

const Email = () => {
  return (
    <MailtoLink
      email="recipient@example.com"
      subject="Regarding Something"
      body="Hello!"
    >
      Contact Me
    </MailtoLink>
  );
};

export default Email;
