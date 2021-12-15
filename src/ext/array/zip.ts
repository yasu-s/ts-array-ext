export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 2 つのシーケンスの対応する要素に対して、1 つの指定した関数を適用し、結果として 1 つのシーケンスを生成します。
     * @description
     * C# LINQのZipメソッドと同様の動作をします。
     * @param second マージする 2 番目のシーケンス
     * @param fn 2 つのシーケンスの要素をマージする方法を指定する関数
     * @return 2 つの入力シーケンスのマージされた要素が格納されている配列
     */
    zip<TSecond, TResult>(second: TSecond[], fn: (first: T, second: TSecond) => TResult): TResult[];
  }
}

Array.prototype.zip = function <T, TSecond, TResult>(second: TSecond[], fn: (first: T, second: TSecond) => TResult) {
  if (!Array.isArray(second) || !fn) {
    return [];
  }

  const items = this as T[];
  const length = items.length < second.length ? items.length : second.length;

  const results: TResult[] = [];
  for (let i = 0; i < length; i++) {
    results.push(fn(items[i], second[i]));
  }

  return results;
};
