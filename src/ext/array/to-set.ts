export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列をSetに変換します
     * @param keyFn
     * @return Set
     */
    toSet<K, V>(keyFn: (value: T) => K): Set<K>;
  }
}

Array.prototype.toSet = function<T, K>(keyFn: (value: T) => K): Set<K> {
  const items = this as T[];

  const convItems = items.map(item => { return { key: keyFn(item) }; });

  const set = new Set<K>();
  for (const item of convItems) {
    if (!set.has(item.key))
    set.add(item.key);
  }

  return set;
};
