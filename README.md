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
    <td>
      select
    </td>
    <td>
      <a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a>
    </td>
    <td>
      配列の各要素を新しい配列に射影します。<br />
      C# LINQのSelectメソッドと同様の動作をします。<br />
      Array.map をラッピングしています。
    </td>
  </tr>  
</table>
