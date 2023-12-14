import {
  About,
  Admission,
  Contact,
  Hero,
  Location,
  Programme,
} from "@components/Overview";

const OverviewPage = () => {
  return (
    <div className="relative w-full pt-20">
      <Hero />
      <About />
      <Programme />
      <Location />
      <Admission />
      <Contact />
    </div>
  );
};

export default OverviewPage;
