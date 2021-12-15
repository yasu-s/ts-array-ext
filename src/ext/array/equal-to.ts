export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列の内容が同じ場合、true
     * @param target 比較先の配列
     * @return 配列の内容が同じ場合、true
     */
    equalTo(target: T[]): boolean;
  }
}

Array.prototype.equalTo = function <T>(target: T[]) {
  const items = this as T[];
  if (!Array.isArray(items) || !Array.isArray(target)) return false;
  // JSON文字列化して比較
  const sourceJson = JSON.stringify(items);
  const targetJson = JSON.stringify(target);
  return sourceJson === targetJson;
};
