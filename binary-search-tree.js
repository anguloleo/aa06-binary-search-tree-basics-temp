// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    var newNode = new TreeNode(val);

    if(currentNode === null){
      this.root = newNode;
    }
    else{ 
      this.insertNode(this.root, newNode);
    }
  }

    insertNode(node, newNode){
      if(newNode.val < node.val){
        if(node.left === null){
          node.left = newNode;
        }
        else{
          this.insertNode(node.left, newNode);
        }
      }
      else{
        if(node.right === null){
          node.right = newNode;
        }
        else{
          this.insertNode(node.right, newNode);
        }
      }
    }
  

  search(val) {
    return this.searchNode(this.root, val);
  }

  searchNode(node, value){
    if(node === null){
      return false;
    }

    if(value === node.val){
      return true;
    }
    else if(value < node.val){
      return this.searchNode(node.left, value);
    }
    else{
      return this.searchNode(node.right, value);
    }
  }


  preOrderTraversal(currentNode = this.root) {
    if(currentNode !== null){
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    if(currentNode !== null){
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if(currentNode !== null){
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    
    const queue = []
    queue.push(this.root);

    while (queue.length > 0) {

        let node = queue.shift();
        console.log(node.val);

        if(node.left){
          queue.push(node.left);
        }
        if(node.right){
          queue.push(node.right);
        }
        
    }
  }
  

  // Depth First Traversal - Iterative
  depthFirstTraversal() { 

    const stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.val);

        if(node.left){
          stack.push(node.left);
        }
        if(node.right){
          stack.push(node.right);
        }
 
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
