export {};

/** ソート情報 */
type SortInfo<K> = {
  /** ソートキー */
  sortKey: K,
  /** 昇順フラグ */
  asc: boolean
};

declare global {
  interface Array<T> {
    /**
     * 指定したプロパティを元に昇順にソートします。
     * @param sortKeys 昇順キー
     * @return ソート後の配列
     */
    orderBy<K extends keyof T>(...sortKeys: K[]): T[];

    /**
     * 指定したプロパティを元にソートします。
     * @param sortKeys sortKey:ソートキー, asc: 昇順フラグ
     * @return ソート後の配列
     */
    orderBy<K extends keyof T>(...sortKeys: { sortKey: K, asc: boolean }[]): T[];
  }
}

Array.prototype.orderBy = function<T, K extends keyof T>(...sortKeys: any[]): T[] {
  const items = this as T[];

  if (!Array.isArray(sortKeys) || sortKeys.length === 0)
    return items.sort();
  else {
    let sortInfos: SortInfo<K>[];
    if (typeof sortKeys[0] === 'object')
      sortInfos = sortKeys as SortInfo<K>[];
    else
      sortInfos = (<K[]>sortKeys).map(key => { return { sortKey: key, asc: true }; });
    return items.sort((a: T, b: T) => compare(a, b, sortInfos));
  }
};

/**
 * ソート判定処理
 * 再帰的にsortInfosを処理して、ソート判定を行います
 * @param value1
 * @param value2
 * @param sortInfos
 */
function compare<T, K extends keyof T>(value1: T, value2: T, sortInfos: SortInfo<K>[]): number {
  const info = sortInfos[0];
  const prop1 = value1[info.sortKey];
  const prop2 = value2[info.sortKey];

  if (prop1 !== prop2) {
    // 値が異なる場合は昇順フラグを元に大小判定
    if (info.asc)
      return (prop1 < prop2) ? -1 : 1;
    else
      return (prop1 > prop2) ? -1 : 1;
  } else {
    // 値が同じ場合はsortInfosが2つ以上残っている時は再帰処理
    if (sortInfos.length <= 1)
      return 0;
    else
      return compare(value1, value2, sortInfos.slice(1));
  }
}
