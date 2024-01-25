import JavaScriptIcon from "../lib/icons/JavaScript.svg";
import HtmlIcon from "../lib/icons/Html.svg";
import PhotoshopIcon from "../lib/icons/Photoshop.svg";
import ReactIcon from "../lib/icons/react.svg";

export const skills = [
  {
    skillBox: "pb-10 sm:pt-5 sm:pb-10 sm:pr-10 border-r-0 sm:border-r-[1px] border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-10 w-10" src={JavaScriptIcon}/>,
    skillTitle: "JavaScript",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "62%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pt-5 sm:pb-10 sm:pl-10 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-10 w-10" src={HtmlIcon}/>,
    skillTitle: "HTML/CSS3",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "94%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pr-10 border-r-0 sm:border-r-[1px] sm:border-b-0 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-10 w-10" src={ReactIcon}/>,
    skillTitle: "ReactJs",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "70%",
  },
  {
    skillBox: "pt-10 sm:pb-5 sm:pt-10 sm:pl-10",
    skillIcon: <img className="h-10 w-15" src={PhotoshopIcon}/>,
    skillTitle: "PhotoShop",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "65%",
  },
];
