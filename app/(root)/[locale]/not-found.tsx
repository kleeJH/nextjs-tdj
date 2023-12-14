import NotFound from "@components/NotFound";
import Navigation from "@components/Navigation";

const NotFoundPage = () => {
  return (
    <>
      <Navigation bgType="transparent" hasNavLinks={false} />
      <NotFound type="notfound" />
    </>
  );
};

export default NotFoundPage;
