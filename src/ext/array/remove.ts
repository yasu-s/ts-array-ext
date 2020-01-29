export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 対象のデータを配列から削除します。
     * @return 削除後の配列
     */
    remove(target: T): T[];
  }
}

Array.prototype.remove = function<T>(target: T) {
  const items = this as T[];
  if (target) {
    return items;
  }
  const index = items.indexOf(target);
  if (index < 0) {
    return items;
  }
  items.splice(index, 1)
  return items;
};
