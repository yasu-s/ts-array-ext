export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 対象のデータを配列から削除します。
     * @param target 削除対象のデータ
     */
    remove(target: T): void;

    /**
     * [拡張メソッド]
     * 指定したインデックスにある要素を削除します。
     * @param index 削除する要素の 0 から始まるインデックス。
     */
    removeAt(index: number): void;
  }
}

Array.prototype.remove = function<T>(target: T) {
  const items = this as T[];
  if (target === null || target === undefined) {
    return;
  }
  const index = items.indexOf(target);
  if (index < 0) {
    return;
  }
  items.splice(index, 1)
  return;
};

Array.prototype.removeAt = function<T>(index: number) {
  const items = this as T[];
  if (index < 0 || items.length <= index) {
    return;
  }
  items.splice(index, 1);
};
