import FacebookIcon from "../lib/icons/Facebook.svg";
import Github from "../lib/icons/Github.svg";
import Linkedin from "../lib/icons/Linkedin.svg";

export const social = [
  {
    socialIcon: (
      <img className="h-5 w-5 lg:h-10 lg:w-10 fill-accent hover:fill-accent" src={FacebookIcon}/>
    ),
    socialLink: "https://www.facebook.com/",
    socialTitle: "Facebook",
  },
  {
    socialIcon: <img className="h-5 w-5 lg:h-10 lg:w-10 fill-[#3d5a70] hover:fill-accent" src={Github}/>,
    socialLink: "#",
    socialTitle: "Github",
  },
  {
    socialIcon: <img className="h-5 w-5 lg:h-10 lg:w-10 fill-[#0ddae1] hover:fill-accent" src={Linkedin}/>,
    socialLink: "https://www.linkedin.com/in/adrien-tafitasoa-71648726b/",
    socialTitle: "LinkeIn",
  },
];
