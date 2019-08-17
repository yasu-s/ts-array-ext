export {};

import { Observable, from } from 'rxjs';

declare global {
  interface Promise<T> {
    /**
     * [拡張メソッド]
     * Promise を Observable に変換します。
     * @return 変換後のObservable
     */
    toObservable(): Observable<T>;
  }
}

Promise.prototype.toObservable = function<T>() {
  const promise = this as Promise<T>;
  return from(promise);
};
