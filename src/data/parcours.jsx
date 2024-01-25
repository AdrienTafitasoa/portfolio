import bacc from "../lib/icons/Certificate.png";
import licence from "../lib/icons/Mortarboard.svg";
import inclusiv from "../lib/icons/logo-inclusiv.png";

export const parcours = [
  {
    id: 1,
    bgColor: "bg-[#93C5FD]",
    titleColor: "text-white",
    descColor: "text-[#070815]",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={bacc}/>,
    servTitle: "UI/UX Creative Design",
    servDesc: "J'ai obtenu mon diplôme Baccalauréat en l'année 2018 avec Mention Assez-Bien Série D.",
  },
  {
    id: 2,
    bgColor: "bg-[#f0e1d4]",
    titleColor: "text-accent2",
    descColor: "text-[#070815]",
    servIcon: <img className="h-[4.25rem] w-[4.25rem] fill-white" src={licence}/>,
    servTitle: "Desktop Application",
    servDesc: "J'ai obtenu mon diplôme de Licence en Physiques et Application avec Mention Bien en 2022.",
  },
  {
    id: 3,
    bgColor: "bg-[#d4e4f0]",
    titleColor: "text-accent2",
    descColor: "text-[#070815]",
    servIcon: <img className="h-[7rem] w-[4.9rem] fill-white" src={inclusiv}/>,
    servTitle: "Website Development",
    servDesc: "J'ai suivi une formation professionnelle pour me reconvertir dans le domaine de la Technologie.",
  },
];
