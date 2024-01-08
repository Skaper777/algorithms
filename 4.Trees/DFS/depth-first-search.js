const root = document.body;
const resultElement = document.getElementById('result');

function traverse(node) {
  const result = [];

  // в рекурсивной функции...
  function recursive(node) {
    // ... сначала обрабатываем ноду, в которой находимся ...
    result.push(node.localName);

    // ...а потом вызываем её же на всех детях
    for (const child of node.children) {
      recursive(child);
    }
  }

  recursive(node);

  resultElement.innerHTML = result.join(' -> ');
}

traverse(root);