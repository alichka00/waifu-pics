export const searchParamsToObject = (
  searchParams: URLSearchParams
): Record<string, string> => {
  const currentParams: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    currentParams[key] = value;
  });

  return currentParams;
};
