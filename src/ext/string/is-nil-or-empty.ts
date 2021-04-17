export {};

declare global {
  interface StringConstructor {
    /**
     * [拡張メソッド]
     * null or undefined or 空文字 の場合は true
     * @return null or undefined or 空文字 の場合は true
     */
    isNillOrEmpty(value: string): boolean;

    /**
     * [拡張メソッド]
     * null or undefined の場合は true
     * @return null or undefined の場合は true
     */
    isNill(value: string): boolean;

    /**
     * [拡張メソッド]
     * 空文字 の場合は true
     * @return 空文字 の場合は true
     */
    isEmpty(value: string): boolean;
  }
}

String.isNillOrEmpty  = function(value: string): boolean {
  return !value;
};

String.isNill  = function(value: string): boolean {
  return value === null || value === undefined;
};

String.isEmpty  = function(value: string): boolean {
  return value === '';
};
