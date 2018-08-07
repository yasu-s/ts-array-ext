export {};

/** ソート情報 */
type SortInfo<T> = {
  /** ソートコールバック */
  sortFn: (obj: T) => any,
  /** 昇順フラグ */
  asc?: boolean
};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 指定したソート項目を元に昇順にソートします。
     * @param sortFn ソート項目,
     * @return ソート後の配列
     */
    orderBy(...sortFn: ((obj: T) => any)[]): T[];

    /**
     * [拡張メソッド]
     * 指定したソート項目を元にソートします。
     * @param sortKeys sortFn: ソート項目, asc: 昇順フラグ,
     * @return ソート後の配列
     */
    orderBy(...sortKeys: { sortFn: (obj: T) => any, asc?: boolean }[]): T[];
  }
}

Array.prototype.orderBy = function<T>(...sortKeys: any[]): T[] {
  const items = this as T[];

  if (!Array.isArray(sortKeys) || sortKeys.length === 0)
    return items.sort();
  else {
    let sortInfos: SortInfo<T>[];
    if (typeof sortKeys[0] === 'function')
      sortInfos = sortKeys.map(fn => { return { sortFn: fn, asc: true }; });
    else {
      sortInfos = sortKeys.map((info: SortInfo<T>) => {
        const asc = (info.asc === null || info.asc === undefined) ? true : info.asc;
        return { sortFn: info.sortFn, asc: asc };
      });
    }
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
function compare<T>(value1: T, value2: T, sortInfos: SortInfo<T>[]): number {
  const info = sortInfos[0];
  const prop1 = info.sortFn(value1);
  const prop2 = info.sortFn(value2);

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
