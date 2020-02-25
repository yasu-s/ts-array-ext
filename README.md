# Overview

A sample collection of TypeScript 's Array extension method.

# System requirements

* Node.js 8.x
* TypeScript 3.5.x  
* jest 24.x (Unit Test)

# Extension Method list

## Array

<table>
  <tr>
    <th>Extension Method</th>
    <th>TypeScript file</th>
    <th>C# LINQ</th>
    <th>Overview</th>
  </tr>
  <tr>
    <td>select</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>Select</td>
    <td>
      Project each element of the array to a new array.
    </td>
  </tr>  
  <tr>
    <td>where</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>Where</td>
    <td>
      Extract the array under specified conditions.
    </td>
  </tr>  
  <tr>
    <td>all</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>All</td>
    <td>
      Determines whether all elements of the array satisfy the condition.
    </td>
  </tr>  
  <tr>
    <td>skip</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>Skip</td>
    <td>
      Skips the specified number of elements from the beginning and returns the remaining array.
    </td>
  </tr>  
  <tr>
    <td>take</td>
    <td><a href="./src/ext/array/alias-linq.ts">./src/ext/array/alias-linq.ts</a></td>
    <td>Take</td>
    <td>
      Returns the specified number of elements from the beginning of the array.
    </td>
  </tr>

  <tr>
    <td>any</td>
    <td><a href="./src/ext/array/any.ts">./src/ext/array/any.ts</a></td>
    <td>Any</td>
    <td>
      True if there is even one case that matches the condition
    </td>
  </tr>  

  <tr>
    <td>sum</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>Sum</td>
    <td>
      Gets the total value of numeric array.
    </td>
  </tr>  
  <tr>
    <td>average</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>Average</td>
    <td>
      Gets the average value of numeric array.
    </td>
  </tr>  
  <tr>
    <td>max</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>Max</td>
    <td>
      Get the maximum value of a numeric array.
    </td>
  </tr>  
  <tr>
    <td>min</td>
    <td><a href="./src/ext/array/calc.ts">./src/ext/array/calc.ts</a></td>
    <td>Min</td>
    <td>
      Get the minimum value of a numeric array.
    </td>
  </tr>  

  <tr>
    <td>deepCopy</td>
    <td><a href="./src/ext/array/deep-copy.ts">./src/ext/array/deep-copy.ts</a></td>
    <td>-</td>
    <td>
      Deep copy the Array.
    </td>
  </tr>  

  <tr>
    <td>distinct</td>
    <td><a href="./src/ext/array/distinct.ts">./src/ext/array/distinct.ts</a></td>
    <td>Distinct</td>
    <td>
      Remove array duplication.
    </td>
  </tr>  
  <tr>
    <td>distinctBy</td>
    <td><a href="./src/ext/array/distinct.ts">./src/ext/array/distinct.ts</a></td>
    <td>-</td>
    <td>
      We will eliminate duplicates from arrays by comparing judgment targets.
    </td>
  </tr>  


  <tr>
    <td>equalTo</td>
    <td><a href="./src/ext/array/equal-to.ts">./src/ext/array/equal-to.ts</a></td>
    <td>-</td>
    <td>
      True if the contents of the array are the same
    </td>
  </tr>  

  <tr>
    <td>first</td>
    <td><a href="./src/ext/array/first.ts">./src/ext/array/first.ts</a></td>
    <td>First</td>
    <td>
      Get the first data of the array.
    </td>
  </tr>  

  <tr>
    <td>last</td>
    <td><a href="./src/ext/array/last.ts">./src/ext/array/last.ts</a></td>
    <td>Last</td>
    <td>
      Get the last data of the array.
    </td>
  </tr>  

  <tr>
    <td>orderBy</td>
    <td><a href="./src/ext/array/orderby.ts">./src/ext/array/orderby.ts</a></td>
    <td>-</td>
    <td>
      Sort based on the specified sort item.
    </td>
  </tr>  

  <tr>
    <td>selectMany</td>
    <td><a href="./src/ext/array/select-many.ts">./src/ext/array/select-many.ts</a></td>
    <td>SelectMany</td>
    <td>
      Combine the values returned by callbackfn and return them as an array.
    </td>
  </tr>  

  <tr>
    <td>toLookup</td>
    <td><a href="./src/ext/array/to-lookup.ts">./src/ext/array/to-lookup.ts</a></td>
    <td>ToLookup</td>
    <td>
      Convert array to Map&lt;K, V[]&gt;
    </td>
  </tr>  

  <tr>
    <td>toMap</td>
    <td><a href="./src/ext/array/to-map.ts">./src/ext/array/to-map.ts</a></td>
    <td>ToMap</td>
    <td>
      Convert array to Map.
    </td>
  </tr>  
  
  <tr>
    <td>toSet</td>
    <td><a href="./src/ext/array/to-set.ts">./src/ext/array/to-set.ts</a></td>
    <td>-</td>
    <td>
    </td>
  </tr>  

  <tr>
    <td>toSet</td>
    <td><a href="./src/ext/array/zip.ts">./src/ext/array/zip.ts</a></td>
    <td>Zip</td>
    <td>
      Applies one specified function to corresponding elements of two sequences, producing one sequence as a result.
    </td>
  </tr>
</table>

## Map

<table>
  <tr>
    <th>Extension Method</th>
    <th>TypeScript file</th>
    <th>Overview</th>
  </tr>
  <tr>
    <td>toArray</td>
    <td><a href="./src/ext/map/to-array.ts">./src/ext/map/to-array.ts</a></td>
    <td>
      Convert Map to an Array.
    </td>
  </tr>  
</table>

## Boolean

<table>
  <tr>
    <th>Extension Method</th>
    <th>TypeScript file</th>
    <th>Overview</th>
  </tr>
  <tr>
    <td>toggle</td>
    <td><a href="./src/ext/boolean/toggle.ts">./src/ext/boolean/toggle.ts</a></td>
    <td>
      Toggle boolean true / false.
    </td>
  </tr>  
</table>


## Object

<table>
  <tr>
    <th>Extension Method</th>
    <th>TypeScript file</th>
    <th>Overview</th>
  </tr>
  <tr>
    <td>deepCopy</td>
    <td><a href="./src/ext/object/deep-copy.ts">./src/ext/object/deep-copy.ts</a></td>
    <td>
      Deep copy the Object.
    </td>
  </tr>  
  <tr>
    <td>equalTo</td>
    <td><a href="./src/ext/object/equal-to.ts">./src/ext/object/equal-to.ts</a></td>
    <td>
      True if the contents of the object are the same.
    </td>
  </tr>  
</table>

