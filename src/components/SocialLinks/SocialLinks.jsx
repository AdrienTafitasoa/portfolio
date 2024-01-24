import { social } from "../../data/social";

const SocialLinks = () => {
  return (
    <div className="socialLinks flex flex-col items-center justify-center gap-5">
      {social.map(
        (item, index) =>
          index < 3 && (
            <a
              className="inline-block"
              href={item.socialLink}
              title={item.socialTitle}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
                {item.socialIcon}
            </a>
          )
      )}
      {/* Social Links */}
    </div>
  );
};

export default SocialLinks;
