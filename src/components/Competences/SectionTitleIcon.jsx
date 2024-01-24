import EducationIcon from "../../lib/icons/Mortarboard.svg";

const SectionTitleIcon = ({title}) => {
  return (
    <div className="secTitleIconWrap gap-3 flex items-center w-full mb-[1.875rem]">
      <img className="fill-accent w-[2.5rem] md:w-[3.75rem]" src={EducationIcon}/>
      <h3 className='text-accent2 font-Poppins font-bold text-[1.75rem]'>{title}</h3>
      {/* Section Title Icon Wrap */}
    </div>
  )
}

export default SectionTitleIcon;
