export {};

declare global {
  interface Object {
    /**
     * [拡張メソッド]
     * Object をディープコピーします。
     * @return コピー後のオブジェクト
     */
    deepCopy<T = object>(): T;
  }
}

Object.prototype.deepCopy = function <T = object>(): T {
  const json = JSON.stringify(this);
  return JSON.parse(json) as T;
};
