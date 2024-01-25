import JavaScriptIcon from "../lib/icons/JavaScript.svg";
import HtmlIcon from "../lib/icons/Html.svg";
import PhotoshopIcon from "../lib/icons/Photoshop.svg";
import ReactIcon from "../lib/icons/react.svg";
import JavaIcon from "../lib/icons/JavaIcon.svg";
import CsharpIcon from "../lib/icons/CsharpIcon.svg";
import SpringBoot from "../lib/icons/SpringBoot.svg";
import Postgres from "../lib/icons/PostgresSql.svg";

export const skills = [
  {
    skillBox: "pb-10 sm:pt-5 sm:pb-10 sm:pr-10 border-r-0 sm:border-r-[1px] border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-10 w-10" src={JavaScriptIcon}/>,
    skillTitle: "JavaScript",
    skillDesc: "J'aime bien ce langage et un jour je vais le maîtriser",
    skillPercent: "62%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pt-5 sm:pb-10 sm:pl-10 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-10 w-10" src={HtmlIcon}/>,
    skillTitle: "HTML/CSS3",
    skillDesc: "Langage de balisage magiques",
    skillPercent: "84%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pr-10 border-r-0 sm:border-r-[1px] sm:border-b-[1px] border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-10 w-10" src={ReactIcon}/>,
    skillTitle: "ReactJs",
    skillDesc: "Bibliothèques Js que j'aime bien aussi",
    skillPercent: "70%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pl-10 border-b-[1px] sm:border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-10 w-15" src={PhotoshopIcon}/>,
    skillTitle: "PhotoShop",
    skillDesc: "Outils de designer",
    skillPercent: "65%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pr-10 border-r-0 sm:border-r-[1px] sm:border-b-[1px] border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-15 w-15" src={JavaIcon}/>,
    skillTitle: "Java",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "67%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pl-10 border-b-[1px] sm:border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-12 w-12" src={CsharpIcon}/>,
    skillTitle: "C# .NET",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "68%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pr-10 border-r-0 sm:border-r-[1px] sm:border-b-0 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <img className="h-15 w-12" src={SpringBoot}/>,
    skillTitle: "Spring Boot",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "63%",
  },
  {
    skillBox: "pt-10 sm:pb-5 sm:pt-10 sm:pl-10",
    skillIcon: <img className="h-12 w-12" src={Postgres}/>,
    skillTitle: "PL/SQL - PostgresSql",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "62%",
  },
];
