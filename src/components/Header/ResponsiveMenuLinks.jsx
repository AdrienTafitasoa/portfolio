
const ResponsiveMenuLinks = ({item}) => {
  return (
    <>
      <li>
        <span className="flex justify-between items-center w-full relative">
          <a
            className="text-white block font-Poppins text-[1rem] font-semibold uppercase hover:text-accent relative w-full pr-4 z-[1]"
            href={item.href}
          >
            {item.title}
          </a>
        </span>
      </li>
    </>
  );
};

export default ResponsiveMenuLinks;
