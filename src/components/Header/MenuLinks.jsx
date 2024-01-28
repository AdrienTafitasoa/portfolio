import { headerLink } from "../../data/headerLink";
const MenuLinks = () => {
  return (
    <nav className="relative hidden lg:block">
      <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 anchor_nav">
        {headerLink.map((item, index) => (
          <li key={index} className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
            <a
              href={item.href}
              className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuLinks;
