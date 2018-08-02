export {};

declare global {
  interface Array<T> {
    /**
     * 配列の最後のデータを取得します。
     */
    last(): T;
  }
}

Array.prototype.last = function<T>() {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return null;
  return items[items.length - 1];
};
