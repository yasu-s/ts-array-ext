export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列の各要素を新しい配列に射影します。
     * @description
     * C# LINQのSelectメソッドと同様の動作をします。
     * Array.map をラッピングしています。
     * @param callbackfn 射影処理
     * @return 射影後の配列
     */
    select<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[];

    /**
     * [拡張メソッド]
     * 配列の指定した条件で抽出します。
     * @description
     * C# LINQのWhereメソッドと同様の動作をします。
     * Array.filter をラッピングしています。
     * @param callbackfn 抽出条件
     * @return 抽出後の配列
     */
    where(callbackfn: (value: T, index: number, array: T[]) => unknown): T[];

    /**
     * [拡張メソッド]
     * 配列のすべての要素が条件を満たすかどうか判定します。
     * @description
     * C# LINQのAllメソッドと同様の動作をします。
     * Array.every をラッピングしています。
     * @param callbackfn 条件
     * @return すべての要素が条件を満たした場合、true
     */
    all(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean;

    /**
     * [拡張メソッド]
     * 先頭から指定された数の要素をスキップし、残りの配列を返します。
     * @description
     * C# LINQのSkipメソッドと同様の動作をします。
     * Array.slice をラッピングしています。
     * @param count スキップ対象の件数
     * @return スキップ後の配列
     */
    skip(count: number): T[];

    /**
     * [拡張メソッド]
     * 配列の先頭から指定した数の要素を返します。
     * @description
     * C# LINQのTakeメソッドと同様の動作をします。
     * Array.slice をラッピングしています。
     * @param count 返す要素数
     * @return 先頭から指定した数の要素
     */
    take(count: number): T[];
  }
}

Array.prototype.select = function <T, U>(callbackfn: (value: T, index: number, array: T[]) => U): U[] {
  const items = this as T[];
  return items.map(callbackfn);
};

Array.prototype.where = function <T>(callbackfn: (value: T, index: number, array: T[]) => unknown): T[] {
  const items = this as T[];
  return items.filter(callbackfn);
};

Array.prototype.all = function <T>(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean {
  const items = this as T[];
  if (!Array.isArray(items) || items.length === 0) return false;
  return items.every(callbackfn);
};

Array.prototype.skip = function <T>(count: number): T[] {
  const items = this as T[];
  return items.slice(count);
};

Array.prototype.take = function <T>(count: number): T[] {
  const items = this as T[];
  return items.slice(0, count);
};
