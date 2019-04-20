export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列内の null or undefined を除去
     * @return  null or undefined を除去後の配列
     */
    trim(): T[];
  }
}

Array.prototype.trim = function<T>() {
  const items = this as T[];
  return items.filter(item => item !== null && item !== undefined);
};
