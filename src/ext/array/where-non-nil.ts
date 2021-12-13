export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * null, undefinedを除外した配列を取得します。
     * @return 抽出後の配列
     */
    whereNonNil(): NonNullable<T>[];
  }
}

Array.prototype.whereNonNil = function<T>(): NonNullable<T>[] {
  const items = this as T[];
  return items.filter((item): item is NonNullable<T> => item !== null && item !== undefined);
};
