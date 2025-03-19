export const isValidObject = (obj: Record<string, unknown>): boolean => {
  return Object.values(obj).every(
    value => value !== null && value !== undefined
  );
};
