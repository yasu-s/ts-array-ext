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
</table>
