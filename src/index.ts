export function groupBy<T, P>(arr: T[], identifier: (val: T) => P) {
  const m = new Map<P, T[]>();
  arr.forEach(item => {
    const prop = identifier(item);
    const collection = m.get(prop);
    if (collection) {
      collection.push(item);
    } else {
      m.set(prop, [item]);
    }
  });
  return m;
}

export const padLeft = (num: number, count: number, glue = '0') => {
  const str = num.toString();
  if (str.length >= count) return str;
  return (new Array(count).join(glue) + str).slice(-count);
};