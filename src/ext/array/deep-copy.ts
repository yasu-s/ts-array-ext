export = {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * Arrayをディープコピーします。
     * @return コピー後の配列
     */
    deepCopy(): T[];
  }
}

Array.prototype.deepCopy = function<T>() {
  const items = this as T[];
  if (!Array.isArray(items)) return [];
  const json = JSON.stringify(items);
  return JSON.parse(json) as T[];
};
