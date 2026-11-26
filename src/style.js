const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-display font-semibold xs:text-[44px] text-[34px] text-white xs:leading-[1.15] leading-[1.2] tracking-tight w-full",
  paragraph: "font-body font-normal text-dimWhite text-[17px] leading-[1.75]",
  eyebrow: "inline-flex items-center gap-2 font-body font-medium text-[13px] uppercase tracking-[0.18em] text-secondary mb-5",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-24 py-12",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
