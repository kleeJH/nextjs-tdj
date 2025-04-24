import {
  About,
  Admission,
  Contact,
  Hero,
  Location,
  Programme,
  // Gallery
} from "@components/Overview";

const OverviewPage = () => {
  return (
    <div className="relative w-full pt-20">
      <Hero />
      <About />
      <Programme />
      <Admission />
      <Location />
      <Contact />
      {/* <Gallery /> */}
    </div>
  );
};

export default OverviewPage;
