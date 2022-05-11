/*

*/

function getCommonDirectoryPath(paths) {
  const pathArrs = paths.map(elt => elt.split('/'));
  let result = '';
  let i = 0;
  while(!pathArrs.some(path => path[i] !== pathArrs[0][i])){
    result += (pathArrs[0][i] + '/');
    i++;
  }
  return result;
}