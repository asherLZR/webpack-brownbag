var fruit = 'apple';

(function (fruit) {
  console.log('inside iife - before', { fruit });
  var fruit = 'pineapple';
  console.log('inside iife - after', { fruit });
})(fruit);

console.log('outside iife', { fruit });
