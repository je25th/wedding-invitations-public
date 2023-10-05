const ContactBox = (props) => {
  return (
    <div className="contact-box">
      <a href={props.phoneLink}>
        <img src={`${process.env.PUBLIC_URL}/assets/icon-phone.png`} />
      </a>
      <a href={props.emailLink}>
        <img src={`${process.env.PUBLIC_URL}/assets/icon-mail.png`} />
      </a>
      <a href={props.kakaoLink} target="_blank">
        <img src={`${process.env.PUBLIC_URL}/assets/icon-kakao.png`} />
      </a>
    </div>
  );
};

export default ContactBox;
