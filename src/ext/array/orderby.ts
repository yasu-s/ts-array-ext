export {};

/** ソートコールバック */
type SortFunction<T> = (obj: T) => string | number;

/** ソート情報 */
type SortInfo<T> = {
  /** ソートコールバック */
  sortFn: SortFunction<T>;
  /** 昇順フラグ */
  asc?: boolean;
};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 指定したソート項目を元に昇順にソートします。
     * @param sortParams ソート項目
     * @return ソート後の配列
     */
    orderBy(...sortParams: SortFunction<T>[]): T[];

    /**
     * [拡張メソッド]
     * 指定したソート項目を元にソートします。
     * @param sortParams sortFn: ソート項目, asc: 昇順フラグ,
     * @return ソート後の配列
     */
    orderBy(...sortParams: SortInfo<T>[]): T[];
  }
}

Object.defineProperty(Array.prototype, 'orderBy', {
  writable: false,
  value: function <T>(...sortParams: (SortFunction<T> | SortInfo<T>)[]) {
    const items = this as T[];
    if (!Array.isArray(sortParams) || sortParams.length === 0) return items.sort();
    const sortInfos = convertSortInfos(sortParams);
    return items.sort((a: T, b: T) => compare(a, b, sortInfos));
  },
});

/**
 * SortFunctionか判定
 * @param sortParam 判定対象の値
 * @returns SortFunctionの場合、true
 */
const isSortFunction = <T>(sortParam: SortFunction<T> | SortInfo<T>): sortParam is SortFunction<T> => {
  return typeof sortParam === 'function';
};

/**
 * SortInfo配列に変換
 * @param sortParams 変換対象の配列
 * @returns SortInfo配列
 */
const convertSortInfos = <T>(sortParams: (SortFunction<T> | SortInfo<T>)[]) => {
  return sortParams.map((sortParam) => {
    return isSortFunction(sortParam)
      ? { sortFn: sortParam, asc: true }
      : { sortFn: sortParam.sortFn, asc: sortParam.asc === undefined ? true : sortParam.asc };
  });
};

/**
 * ソート判定処理
 * 再帰的にsortInfosを処理して、ソート判定を行います
 * @param value1 比較オブジェクト1
 * @param value2 比較オブジェクト2
 * @param sortInfos ソート情報
 * @returns 比較結果
 */
const compare = <T>(value1: T, value2: T, sortInfos: SortInfo<T>[]): number => {
  const info = sortInfos[0];
  const prop1 = info.sortFn(value1);
  const prop2 = info.sortFn(value2);

  if (prop1 !== prop2) {
    // 値が異なる場合は昇順フラグを元に大小判定
    if (info.asc) return prop1 < prop2 ? -1 : 1;
    else return prop1 > prop2 ? -1 : 1;
  } else {
    // 値が同じ場合はsortInfosが2つ以上残っている時は再帰処理
    if (sortInfos.length <= 1) return 0;
    else return compare(value1, value2, sortInfos.slice(1));
  }
};
