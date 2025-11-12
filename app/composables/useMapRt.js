export default el => {
  const { rt } = useI18n();

  return Object.fromEntries(
    Object.entries(el).map(([key, value]) => {
      return [key, rt(value)];
    })
  );
};
