import Config from "@config";

import SectionWrapper from "@components/basic/SectionWrapper";
import CarouselWithArrows from "@components/basic/CarouselWithArrows";

import { styles } from "@styles/sharedStyles";

const Gallery = () => {

  return (
    <>
      <div className="mb-14">
        <p className={styles.sectionSubText}>CAPTURE MOMENTS</p>
        <h2 className={styles.sectionHeadText}>Gallery.</h2>
      </div>

      <CarouselWithArrows>
        {Config.gallery.map((post, index) => (
          <div key={index}>
            <iframe
              src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                post.link
              )}&show_text=false&width=350`}
              width={350}
              height={post.height}
              className="border-0 overflow-hidden mx-auto"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        ))}
      </CarouselWithArrows>
    </>
  );
};

export default SectionWrapper(Gallery, "gallery");
