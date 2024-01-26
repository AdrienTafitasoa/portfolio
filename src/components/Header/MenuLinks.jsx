
const MenuLinks = () => {
  return (
    <nav className="relative hidden lg:block">
      <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <a href="#adrienRobinson" className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Adrien Robinson
          </a>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <a  href="#apropos" className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            A Propos
          </a>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <a href="#parcours" className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Parcours
          </a>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <a href="#competences" className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Compétences
          </a>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <a href="#projetrealise" className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Projet Réalisée
          </a>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <a
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuLinks;
