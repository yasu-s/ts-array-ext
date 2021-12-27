export {};

declare global {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  interface Array<T = number> {
    /**
     * [拡張メソッド]
     * 数値配列の合計値を取得します。
     * @return 合計値
     */
    sum(): number;

    /**
     * [拡張メソッド]
     * 数値配列の平均値を取得します。
     * @return 平均値
     */
    average(): number;

    /**
     * [拡張メソッド]
     * 数値配列の最大値を取得します。
     * @return 最大値
     */
    max(): number;

    /**
     * [拡張メソッド]
     * 数値配列の最小値を取得します。
     * @return 最小値
     */
    min(): number;
  }
}

Array.prototype.sum = function () {
  const items = this as number[];
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, num) => sum + num, 0);
};

Array.prototype.average = function () {
  const items = this as number[];
  if (!Array.isArray(items) || items.length === 0) return 0;
  const total = items.reduce((sum, num) => sum + num, 0);
  return total / items.length;
};

Array.prototype.max = function () {
  const items = this as number[];
  if (!Array.isArray(items)) return 0;
  return items.reduce((max, num) => (max > num ? max : num), 0);
};

Array.prototype.min = function () {
  const items = this as number[];
  if (!Array.isArray(items) || items.length === 0) return 0;
  return items.reduce((min, num) => (min < num ? min : num));
};
