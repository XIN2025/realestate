import PropTypes from "prop-types";

const MailtoLink = ({ email, subject, body, children }) => {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoUrl}
      className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
    >
      {children}
    </a>
  );
};
export default MailtoLink;
MailtoLink.propTypes = {
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
