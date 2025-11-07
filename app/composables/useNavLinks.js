export default () => {
  const { t } = useI18n();

  // define constant paths and keys (these don’t change)
  const baseLinks = [
    { key: 'about', path: '/about' },
    { key: 'events', path: '/events' },
    { key: 'participants', path: '/participants' },
    { key: 'speakers', path: '/speakers' },
    { key: 'partners', path: '/partners' },
    { key: 'sponsors', path: '/sponsors' },
    { key: 'media', path: '/media' }
  ];

  // computed so labels auto-update when language changes
  const navLinks = computed(() =>
    baseLinks.map(link => ({
      ...link,
      label: t(`nav.${link.key}`)
    }))
  );

  return { navLinks };
};
