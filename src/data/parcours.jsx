import UiCreativeDesignIcon from "../lib/icons/Curve.svg";
import DesktopApplicationIcon from "../lib/icons/InformationService.svg";
import WebDevelopmentIcon from "../lib/icons/Monitor.svg";
import WireframingServiceIcon from "../lib/icons/WebProgramming.svg";
import StrategyIcon from "../lib/icons/Strategy.svg";
import TranslationIcon from "../lib/icons/Translation.svg";

export const parcours = [
  {
    id: 1,
    bgColor: "bg-accent",
    titleColor: "text-white",
    descColor: "text-white",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={UiCreativeDesignIcon}/>,
    servTitle: "UI/UX Creative Design",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
  },
  {
    id: 2,
    bgColor: "bg-[#f0e1d4]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={WebDevelopmentIcon}/>,
    servTitle: "Desktop Application",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
  },
  {
    id: 3,
    bgColor: "bg-[#d4e4f0]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={WireframingServiceIcon}/>,
    servTitle: "Website Development",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
  },
  {
    id: 4,
    bgColor: "bg-gray",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={DesktopApplicationIcon}/>,
    servTitle: "Wireframing Services",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
  },
  {
    id: 5,
    bgColor: "bg-[#f0fbfe]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={StrategyIcon}/>,
    servTitle: "Strategy & Research",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
  },
  {
    id: 6,
    bgColor: "bg-[#fef4f0]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={TranslationIcon}/>,
    servTitle: "Branding & Strategy",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
  },
];
