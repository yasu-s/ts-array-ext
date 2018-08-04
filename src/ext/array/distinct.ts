export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列の重複を除去します。
     * @return 重複除去後の配列
     */
    distinct(): T[];
  }
}

Array.prototype.distinct = function<T>() {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return [];
  return items.filter((item, index, array) => array.indexOf(item) === index);
};
