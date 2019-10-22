export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列の最初のデータを取得します。
     * @description C# LINQのFirstメソッドと同様の動作をします。
     * @return 配列の最初のデータ
     */
    first(): T | null;

    /**
     * [拡張メソッド]
     * 配列の最初のデータを取得します。データが存在しない場合はdefaultValueを戻します
     * @param defaultValue データが存在しない場合に戻す値
     * @return 配列の最初のデータ
     */
    firstOrDefault(defaultValue: T): T;
  }
}

Array.prototype.first = function<T>() {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return null;
  return items[0];
};

Array.prototype.firstOrDefault = function<T>(defaultValue: T) {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return defaultValue;
  return items[0];
};
