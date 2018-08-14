# 概要

TypeScriptの Array 拡張メソッドのサンプル集です。

# 動作環境

* Node.js 8.x
* TypeScript 2.9.x  
* jest 23.x

# 拡張メソッド一覧

## Array

<table>
  <tr>
    <th>拡張メソッド</th>
    <th>TypeScriptファイル</th>
    <th>概要</th>
  </tr>
  <tr>
    <td>select</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>
      配列の各要素を新しい配列に射影します。<br />
      C# LINQのSelectメソッドと同様の動作をします。<br />
      Array.map をラッピングしています。
    </td>
  </tr>  
  <tr>
    <td>where</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>
      配列の指定した条件で抽出します。<br />
      C# LINQのWhereメソッドと同様の動作をします。<br />
      Array.filter をラッピングしています。
    </td>
  </tr>  
  <tr>
    <td>all</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>
      配列のすべての要素が条件を満たすかどうか判定します。<br />
      C# LINQのAllメソッドと同様の動作をします。<br />
      Array.every をラッピングしています。
    </td>
  </tr>  
  <tr>
    <td>skip</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>
      先頭から指定された数の要素をスキップし、残りの配列を返します。<br />
      C# LINQのSkipメソッドと同様の動作をします。<br />
      Array.slice をラッピングしています。
    </td>
  </tr>  
  <tr>
    <td>take</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>
      配列の先頭から指定した数の要素を返します。<br />
      C# LINQのTakeメソッドと同様の動作をします。<br />
      Array.slice をラッピングしています。
    </td>
  </tr>

  <tr>
    <td>any</td>
    <td><a href="./src/ext/array/any.ts">./src/ext/array/any.ts</a></td>
    <td>
      条件にあうデータが1件でもある場合、true<br />
      C# LINQのAnyメソッドと同様の動作をします。
    </td>
  </tr>  

  <tr>
    <td>sum</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>
      数値配列の合計値を取得します。
    </td>
  </tr>  
  <tr>
    <td>average</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>
      数値配列の平均値を取得します。
    </td>
  </tr>  
  <tr>
    <td>max</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>
      数値配列の最大値を取得します。
    </td>
  </tr>  
  <tr>
    <td>min</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>
      数値配列の最小値を取得します。
    </td>
  </tr>  

  <tr>
    <td>deepCopy</td>
    <td><a href="./src/ext/array/deep-copy.ts">./src/ext/array/deep-copy.ts</a></td>
    <td>
      Arrayをディープコピーします。
    </td>
  </tr>  

  <tr>
    <td>distinct</td>
    <td><a href="./src/ext/array/distinct.ts">./src/ext/array/distinct.ts</a></td>
    <td>
      配列の重複を除去します。
    </td>
  </tr>  

  <tr>
    <td>equalTo</td>
    <td><a href="./src/ext/array/equal-to.ts">./src/ext/array/equal-to.ts</a></td>
    <td>
      配列の内容が同じ場合、true
    </td>
  </tr>  

  <tr>
    <td>first</td>
    <td><a href="./src/ext/array/first.ts">./src/ext/array/first.ts</a></td>
    <td>
      配列の最初のデータを取得します。<br />
      C# LINQのFirstメソッドと同様の動作をします。
    </td>
  </tr>  

  <tr>
    <td>last</td>
    <td><a href="./src/ext/array/last.ts">./src/ext/array/last.ts</a></td>
    <td>
      配列の最後のデータを取得します。<br />
      C# LINQのLastメソッドと同様の動作をします。
    </td>
  </tr>  

  <tr>
    <td>orderBy</td>
    <td><a href="./src/ext/array/orderby.ts">./src/ext/array/orderby.ts</a></td>
    <td>
      指定したソート項目を元にソートします。
    </td>
  </tr>  

  <tr>
    <td>selectMany</td>
    <td><a href="./src/ext/array/select-many.ts">./src/ext/array/select-many.ts</a></td>
    <td>
      callbackfnで戻した配列を結合します
    </td>
  </tr>  

  <tr>
    <td>toLookup</td>
    <td><a href="./src/ext/array/to-lookup.ts">./src/ext/array/to-lookup.ts</a></td>
    <td>
      配列をMap<K, V[]>に変換します
    </td>
  </tr>  

  <tr>
    <td>toMap</td>
    <td><a href="./src/ext/array/to-map.ts">./src/ext/array/to-map.ts</a></td>
    <td>
      配列をMapに変換します
    </td>
  </tr>  
</table>

## Map

<table>
  <tr>
    <th>拡張メソッド</th>
    <th>TypeScriptファイル</th>
    <th>概要</th>
  </tr>
  <tr>
    <td>toArray</td>
    <td><a href="./src/ext/map/to-array.ts">./src/ext/map/to-array.ts</a></td>
    <td>
      配列をMapに変換します
    </td>
  </tr>  
</table>


## Object

<table>
  <tr>
    <th>拡張メソッド</th>
    <th>TypeScriptファイル</th>
    <th>概要</th>
  </tr>
  <tr>
    <td>deepCopy</td>
    <td><a href="./src/ext/object/deep-copy.ts">./src/ext/object/deep-copy.ts</a></td>
    <td>
      Object をディープコピーします。
    </td>
  </tr>  
  <tr>
    <td>equalTo</td>
    <td><a href="./src/ext/object/equal-to.ts">./src/ext/object/equal-to.ts</a></td>
    <td>
      オブジェクトの内容が同じ場合、true
    </td>
  </tr>  
</table>

