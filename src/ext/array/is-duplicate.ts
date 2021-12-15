export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 対象のインデックスの値が重複しているか判定します。
     * @param index 対象のインデックス
     * @return 重複していた場合、true
     */
    isDuplicate(index: number): boolean;
  }
}

Array.prototype.isDuplicate = function <T>(index: number): boolean {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0 || index < 0 || items.length <= index) return false;
  return items.some((item, i) => i !== index && items[index] === item);
};
