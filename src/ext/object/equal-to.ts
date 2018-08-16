export = {};

declare global {
  interface Object {
    /**
     * [拡張メソッド]
     * オブジェクトの内容が同じ場合、true
     * @param target 比較先のオブジェクト
     * @return オブジェクトの内容が同じ場合、true
     */
    equalTo(target: object): boolean;
  }
}

Object.prototype.equalTo = function(target: object) {
  if (target === null || target === undefined) return false;
  // JSON文字列化して比較
  const sourceJson = JSON.stringify(this);
  const targetJson = JSON.stringify(target);
  return sourceJson === targetJson;
};
