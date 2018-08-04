export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列をMapに変換します
     * @param keyFn
     * @param valueFn
     * @return Map
     */
    toMap<K, V>(keyFn: (value: T) => K, valueFn: (value: T) => V): Map<K, V>;
  }
}

Array.prototype.toMap = function<T, K, V>(keyFn: (value: T) => K, valueFn: (value: T) => V): Map<K, V> {
  const items = this as T[];
  if (!Array.isArray(items)) return null;

  const convItems = items.map(item => { return { key: keyFn(item), value: valueFn(item) }; });

  const map = new Map<K, V>();
  for (const item of convItems) {
    if (!map.has(item.key))
      map.set(item.key, item.value);
  }

  return map;
};
