export {};

declare global {
  interface ArrayConstructor {
    /**
     * [拡張メソッド]
     * 空配列生成
     * @return 空配列生成
     */
    empty<T>(): T[];
  }
}

Array.empty  = function<T>(): T[] {
  return [] as T[];
};
