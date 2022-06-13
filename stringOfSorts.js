/*
Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

function sortString(string,ordering) {
  const noDupes = [...new Set(ordering.split(''))]
  return [...string]
            .sort((a, b) => {
              const indexA = noDupes.indexOf(a);
              const indexB = noDupes.indexOf(b);
              if(indexA < 0) return 1;
              else if(indexB < 0) return -1;
              return indexA - indexB;
            })
            .join('')
}