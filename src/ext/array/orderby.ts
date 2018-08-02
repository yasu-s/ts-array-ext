export {};

declare global {
  interface Array<T> {
    /**
     * 指定したプロパティを元に昇順にソートします。
     * @param sortKeys 昇順キー
     * @return ソート後の配列
     */
    orderBy<K extends keyof T>(...sortKeys: K[]): T[];
  }
}

Array.prototype.orderBy = function<T, K extends keyof T>(...sortKeys: K[]) {
  const items = this as T[];

  if (!Array.isArray(sortKeys) || sortKeys.length === 0)
    return items.sort();
  else
    return items.sort((a: T, b: T) => compare(a, b, sortKeys, 0));
};

/**
 * 昇順ソート処理
 * @param value1
 * @param value2
 * @param sortKeys
 * @param sortIndex
 */
function compare<T, K extends keyof T>(value1: T, value2: T, sortKeys: K[], sortIndex: number): number {
  const key = sortKeys[sortIndex];
  if (value1[key] !== value2[key])
    return (value1[key] < value2[key]) ? -1 : 1;
  else {
    if (sortIndex === sortKeys.length - 1)
      return 0;
    else
      return compare(value1, value2, sortKeys, sortIndex + 1);
  }
}
