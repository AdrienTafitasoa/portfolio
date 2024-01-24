import FacebookIcon from "../lib/icons/Facebook.svg";
import TumblrIcon from "../lib/icons/Tumblr.svg";
import TwitterIcon from "../lib/icons/Twitter.svg";

export const social = [
  {
    socialIcon: (
      <img className="h-5 w-5 lg:h-10 lg:w-10 fill-accent hover:fill-accent" src={FacebookIcon}/>
    ),
    socialLink: "https://www.facebook.com/",
    socialTitle: "Facebook",
  },
  {
    socialIcon: <img className="h-5 w-5 lg:h-10 lg:w-10 fill-[#3d5a70] hover:fill-accent" src={TumblrIcon}/>,
    socialLink: "#",
    socialTitle: "Tumblr",
  },
  {
    socialIcon: <img className="h-5 w-5 lg:h-10 lg:w-10 fill-[#0ddae1] hover:fill-accent" src={TwitterIcon}/>,
    socialLink: "https://twitter.com/",
    socialTitle: "Twitter",
  },
];
