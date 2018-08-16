export = {};

declare global {
  interface Object {
    /**
     * [拡張メソッド]
     * Object をディープコピーします。
     * @return コピー後のオブジェクト
     */
    deepCopy<T = any>(): T;
  }
}

Object.prototype.deepCopy = function<T = any>(): T {
  const obj = this;
  const json = JSON.stringify(obj);
  return JSON.parse(json) as T;
};
