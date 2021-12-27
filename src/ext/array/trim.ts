export {};

declare global {
  interface Array<T> {
    /**
     * [拡張メソッド]
     * 配列内の null or undefined を除去
     * @return  null or undefined を除去後の配列
     */
    trim(): NonNullable<T>[];
  }
}

Object.defineProperty(Array.prototype, 'trim', {
  writable: false,
  value: function <T>() {
    const items = this as T[];
    return items.filter((item): item is NonNullable<T> => item !== null && item !== undefined);
  },
});
