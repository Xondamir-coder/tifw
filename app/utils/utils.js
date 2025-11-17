export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
export const getDefaultScrollTrigger = (
  trigger,
  { start = 'top 90%', end = 'top 60%', scrub = 1 } = {}
) => ({
  trigger,
  start,
  end,
  scrub
});
export const isOutOfViewport = el => {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom < 0 || // above viewport
    rect.top > window.innerHeight || // below viewport
    rect.right < 0 || // left of viewport
    rect.left > window.innerWidth // right of viewport
  );
};
