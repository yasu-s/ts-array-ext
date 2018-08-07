export {};

declare global {
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

Array.prototype.sum = function() {
  const items = this as number[];
  if (!Array.isArray(items) || items.length === 0) return 0;
  let total = 0;
  for (const num of items) {
    total += num;
  }
  return total;
};

Array.prototype.average = function() {
  const items = this as number[];
  if (!Array.isArray(items) || items.length === 0) return 0;
  let total = 0;
  for (const num of items) {
    total += num;
  }
  return total / items.length;
};


Array.prototype.max = function() {
  const items = this as number[];
  if (!Array.isArray(items) || items.length === 0) return 0;
  let max = items[0];
  for (const num of items) {
    if (max < num)
      max = num;
  }
  return max;
};

Array.prototype.min = function() {
  const items = this as number[];
  if (!Array.isArray(items) || items.length === 0) return 0;
  let min = items[0];
  for (const num of items) {
    if (num < min)
      min = num;
  }
  return min;
};
