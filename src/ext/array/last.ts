export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列の最後のデータを取得します。
     * @description C# LINQのLastメソッドと同様の動作をします。
     * @return 配列の最後のデータ
     */
    last(): T | null;

    /**
     * [拡張メソッド]
     * 配列の最後のデータを取得します。データが存在しない場合はdefaultValueを戻します
     * @param defaultValue データが存在しない場合に戻す値
     * @return 配列の最後のデータ
     */
    lastOrDefault(defaultValue: T): T;
  }
}

Array.prototype.last = function<T>() {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return null;
  return items[items.length - 1];
};

Array.prototype.lastOrDefault = function<T>(defaultValue: T) {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return defaultValue;
  return items[items.length - 1];
};
