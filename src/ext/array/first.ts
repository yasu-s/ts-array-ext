export = {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列の最初のデータを取得します。
     * @description C# LINQのFirstメソッドと同様の動作をします。
     * @return 配列の最初のデータ
     */
    first(): T;
  }
}

Array.prototype.first = function<T>() {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return null;
  return items[0];
};
