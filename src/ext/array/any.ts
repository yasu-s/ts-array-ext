export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 条件にあうデータが1件でもある場合、true
     * @description C# LINQのAnyメソッドと同様の動作をします。
     * @param callbackfn 条件
     * @return データがある場合、true
     */
    any(callbackfn?: (value: T, index: number, array: T[]) => boolean): boolean;
  }
}

Array.prototype.any = function <T>(callbackfn?: (value: T, index: number, array: T[]) => boolean) {
  const items = this as T[];
  if (!Array.isArray(items)) return false;

  if (callbackfn) return items.some(callbackfn);
  else return items.length > 0;
};
