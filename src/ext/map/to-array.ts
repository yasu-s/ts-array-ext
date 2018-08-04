export {};

declare global {
  interface Map<K, V> {
    /**
     * [拡張メソッド]
     * 配列をMapに変換します
     * @return Map
     */
    toArray(): Array<{ key: K, value: V }>;
  }
}

Map.prototype.toArray = function<K, V>(): Array<{ key: K, value: V }> {
  const map = this as Map<K, V>;
  if (!map) return [];

  const items = new Array<{ key: K, value: V }>();
  map.forEach((value, key) => {
    items.push({ key: key, value: value });
  });

  return items;
};
