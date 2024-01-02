import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const TermsOfServicePage = () => {
  return (
    <div className="relative min-h-[calc(80vh)] pt-20">
      <h1 className={styles.heroHeadText}>Terms and Conditions</h1>

      <h2 className={styles.withinSectionHeadText}>1. Terms</h2>

      <p className={styles.withinSectionSubText}>
        By accessing this Website, accessible from
        https://www.tadikadesajaya.edu.my, you are agreeing to be bound by these
        Website Terms and Conditions of Use and agree that you are responsible
        for the agreement with any applicable local laws. If you disagree with
        any of these terms, you are prohibited from accessing this site. The
        materials contained in this Website are protected by copyright and trade
        mark law.
      </p>

      <h2 className={styles.withinSectionHeadText}>2. Use License</h2>

      <p className={styles.withinSectionSubText}>
        Permission is granted to temporarily download one copy of the materials
        on Tadika Desa Jaya&apos;s Website for personal, non-commercial
        transitory viewing only. This is the grant of a license, not a transfer
        of title, and under this license you may not:
      </p>

      <ul
        className={`font-inter text-textDefault text-[17px] max-w-3xl list-disc space-y-1 py-6`}
      >
        <li>modify or copy the materials;</li>
        <li>
          use the materials for any commercial purpose or for any public
          display;
        </li>
        <li>
          attempt to reverse engineer any software contained on Tadika Desa
          Jaya&apos;s Website;
        </li>
        <li>
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li>
          transferring the materials to another person or &quot;mirror&quot; the
          materials on any other server.
        </li>
      </ul>

      <p className={styles.withinSectionSubText}>
        This will let Tadika Desa Jaya to terminate upon violations of any of
        these restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format. These Terms of
        Service has been created with the help of the{" "}
        <a href="https://www.termsofservicegenerator.net">
          Terms Of Service Generator
        </a>
        .
      </p>

      <h2 className={styles.withinSectionHeadText}>3. Disclaimer</h2>

      <p className={styles.withinSectionSubText}>
        All the materials on Tadika Desa Jaya&apos;s Website are provided
        &quot;as is&quot;. Tadika Desa Jaya makes no warranties, may it be
        expressed or implied, therefore negates all other warranties.
        Furthermore, Tadika Desa Jaya does not make any representations
        concerning the accuracy or reliability of the use of the materials on
        its Website or otherwise relating to such materials or any sites linked
        to this Website.
      </p>

      <h2 className={styles.withinSectionHeadText}>4. Limitations</h2>

      <p className={styles.withinSectionSubText}>
        Tadika Desa Jaya or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on Tadika Desa Jaya&apos;s Website, even if Tadika Desa Jaya or an
        authorize representative of this Website has been notified, orally or
        written, of the possibility of such damage. Some jurisdiction does not
        allow limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </p>

      <h2 className={styles.withinSectionHeadText}>5. Revisions and Errata</h2>

      <p className={styles.withinSectionSubText}>
        The materials appearing on Tadika Desa Jaya&apos;s Website may include
        technical, typographical, or photographic errors. Tadika Desa Jaya will
        not promise that any of the materials in this Website are accurate,
        complete, or current. Tadika Desa Jaya may change the materials
        contained on its Website at any time without notice. Tadika Desa Jaya
        does not make any commitment to update the materials.
      </p>

      <h2 className={styles.withinSectionHeadText}>6. Links</h2>

      <p className={styles.withinSectionSubText}>
        Tadika Desa Jaya has not reviewed all of the sites linked to its Website
        and is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by Tadika Desa Jaya of
        the site. The use of any linked website is at the user&apos;s own risk.
      </p>

      <h2 className={styles.withinSectionHeadText}>
        7. Site Terms of Use Modifications
      </h2>

      <p className={styles.withinSectionSubText}>
        Tadika Desa Jaya may revise these Terms of Use for its Website at any
        time without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>

      <h2 className={styles.withinSectionHeadText}>8. Your Privacy</h2>

      <p className={styles.withinSectionSubText}>
        Please read our Privacy Policy.
      </p>

      <h2 className={styles.withinSectionHeadText}>9. Governing Law</h2>

      <p className={styles.withinSectionSubText}>
        Any claim related to Tadika Desa Jaya&apos;s Website shall be governed
        by the laws of my without regards to its conflict of law provisions.
      </p>
    </div>
  );
};

export default SectionWrapper(TermsOfServicePage, "tos");
