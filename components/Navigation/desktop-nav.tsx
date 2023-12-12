import LocaleSwitch from "./locale-button";
import ThemeSwitch from "./theme-button";

const DesktopNavigation = () => {
  return (
    <div className="sm:flex hidden">
      <div className="flex gap-3 md:gap-5">
        <LocaleSwitch />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default DesktopNavigation;
