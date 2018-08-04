export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列をMap<K, V[]>に変換します
     * @param keyFn
     * @param valueFn
     * @return Map
     */
    toLookup<K, V>(keyFn: (value: T) => K, valueFn: (value: T) => V): Map<K, V[]>;
  }
}

Array.prototype.toLookup = function<T, K, V>(keyFn: (value: T) => K, valueFn: (value: T) => V): Map<K, V[]> {
  const items = this as T[];
  if (!Array.isArray(items)) return null;

  const convItems = items.map(item => { return { key: keyFn(item), value: valueFn(item) }; });

  const map = new Map<K, V[]>();
  for (const item of convItems) {
    if (map.has(item.key)) {
      const values = map.get(item.key);
      values.push(item.value);
      map.set(item.key, values);
    } else
      map.set(item.key, [item.value]);
  }

  return map;
};
