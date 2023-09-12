export const items = new Array(299999).fill(0).map((_, index) => {
  return {
    item: index,
    isSelected: index === 299998,
  };
});
