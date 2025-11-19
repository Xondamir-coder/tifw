export default () => {
  const { $gsap } = useNuxtApp();
  const getConfig = el => ({
    clipPath: 'inset(0 0 100%)',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom 80%',
      scrub: 1
    }
  });
  const animateEl = el => {
    const content = el.textContent;
    const span = document.createElement('span');
    span.textContent = content;
    el.appendChild(span);
    $gsap.from(span, getConfig(el));
  };

  $gsap.utils.toArray('.section-header h2').forEach(animateEl);
  $gsap.utils.toArray('.section-header p').forEach(animateEl);
};
