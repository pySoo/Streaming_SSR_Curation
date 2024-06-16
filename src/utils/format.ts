export const removeMarkdownBoldTag = (text: string) =>
  text.replace(/<\/?b>/g, '');

export const convertToKRPrice = (price: string | number) => {
  if (typeof price === 'string') {
    return parseInt(price).toLocaleString('ko-KR');
  }
  return price.toLocaleString('ko-KR');
};
