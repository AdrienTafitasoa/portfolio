
const MenuLinks = () => {
  return (
    <nav className="relative hidden lg:block">
      <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Adrien Robinson
          </span>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            A Propos
          </span>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Parcours
          </span>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Compétences
          </span>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
            Projet Réalisée
          </span>
          
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <p
            className="group-hover:text-accent text-accent2 pr-5 relative block"
            title="Contact"
          >
            Contact
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default MenuLinks;
