export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列の重複を除去します。
     * @return 重複除去後の配列
     */
    distinct(): T[];

    /**
     * [拡張メソッド]
     * 判定対象を比較して配列から重複を除去します。
     * @param keySelector 重複判定対象
     * @return 重複除去後の配列
     */
    distinctBy<K>(keySelector?: (obj: T) => K): T[];
  }
}

Array.prototype.distinct = function <T>(): T[] {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return [];
  return items.filter((item, index, array) => array.indexOf(item) === index);
};

Array.prototype.distinctBy = function <T, K>(keySelector?: (obj: T) => K): T[] {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return [];
  if (!keySelector) return items.distinct();
  const keys = items.map((item) => keySelector(item));
  return items.filter((item, index) => keys.indexOf(keySelector(item)) === index);
};
