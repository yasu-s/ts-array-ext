export = {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * callbackfnで戻した配列を結合します
     * @param callbackfn 条件
     * @return 結合後の配列
     */
    selectMany<U>(callbackfn: (value: T, index: number, array: T[]) => U[]): U[];
  }
}

Array.prototype.selectMany = function<T, U>(callbackfn: (value: T, index: number, array: T[]) => U[]): U[] {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return [];

  return items.map(callbackfn).reduce((prev, current) => prev.concat(current));
};
