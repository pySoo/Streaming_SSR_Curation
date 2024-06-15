export const removeMarkdownBoldTag = (text: string) =>
  text.replace(/<\/?b>/g, '');
