let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\W)'|'($|\W)/g, "$1\"$2"));
// → "I'm the cook," he said, "it's my job."

/*
 First came up with this, but it loses characters that are already there, and it is hideous:
 console.log(text.replace(/(^')|('\s)|(\s')|('$)/g, "\""));
*/