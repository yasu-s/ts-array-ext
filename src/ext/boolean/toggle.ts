export {};

declare global {
  interface Boolean {
    /**
     * [拡張メソッド]
     * booleanのtrue/falseを切り替えます
     * @return 切り替え後のboolean
     */
    toggle(): boolean;
  }
}

Boolean.prototype.toggle = function(): boolean {
  return !(<boolean>this);
};
