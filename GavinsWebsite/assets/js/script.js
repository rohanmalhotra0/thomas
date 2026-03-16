const sections = Array.from(document.querySelectorAll(".page-scroll"));
const navLinks = Array.from(document.querySelectorAll(".page"));

function setActiveLink(id) {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === `#${id}`);
  });
}

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveLink(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.4, 0.6],
    }
  );

  sections.forEach((section) => observer.observe(section));
}
