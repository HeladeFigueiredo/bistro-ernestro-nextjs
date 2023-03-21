/**
 *
 * @param {string} item
 * @param {string} splitter
 * @returns {string[]}
 */
export const splitClean = (item, splitter) => {
  if(typeof item !== 'string') throw Error('(splitClean): "item" deve ser uma string');
  if(typeof splitter !== 'string') throw Error('(splitClean): "splitter" deve ser uma string');
  
  return (item.length === 0) ? [] : item.split(splitter).filter((d) => d.length > 0);
}
