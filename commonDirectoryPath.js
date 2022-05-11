/*
Returns the commom directory path for specified array of full filenames.

  ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
  ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
  ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
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