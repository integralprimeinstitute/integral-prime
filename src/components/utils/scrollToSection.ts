
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerHeight = 100;

  const offsetTop =
    element.getBoundingClientRect().top +
    window.scrollY -
    headerHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
};