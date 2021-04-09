const Node = require('./node');

// Binary Search tree class
module.exports=class BinaryTree
{
    
    constructor()
    {
        
        // root of a binary seach tree
        this.root = null;
    }
  //insert Data to node
    insert(data)
    {

        var newNode = new Node(data);
        
        if(this.root === null)
            this.root = newNode;
        else

            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode)
    {
        if(newNode.data.price == node.data.price){
            console.log("matched");
            if(newNode.data.side!=node.data.side){
                console.log("not matched");
                this.remove(node.data);
                return node.data;
            }
                
            
        }
        if(newNode.data.price < node.data.price)
        {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode); 
        }
      
        else
        {
            
            if(node.right === null)
                node.right = newNode;
            else
 
                this.insertNode(node.right,newNode);
        }
    }

    remove(data)
    {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeNode(this.root, data);
    }
      

    removeNode(node, key)
    {
              
        // if the root is null then tree is empty
        if(node === null)
            return null;
      
        // if data to be delete is less than roots data then move to left subtree
        else if(key.price < node.data)
        {
            node.left = this.removeNode(node.left, key);
            return node;
        }
      
        // if data to be delete is greater than roots data then move to right subtree
        else if(key.price > node.data)
        {
            node.right = this.removeNode(node.right, key);
            return node;
        }
      
        // if data is similar to the root's data then delete this node

        else
        {
             // deleting node with no children
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }
      
            // deleting node with one children
            if(node.left === null)
            {
                node = node.right;
                return node;
            }
              
            else if(node.right === null)
            {
                node = node.left;
                return node;
            }
      
            // Deleting node with two children minumum node of the rigt subtree is stored in aux

            var rst = this.findMinNode(node.right);
            node.data = rst.data;
      
            node.right = this.removeNode(node.right, rst.data);
            return node;
        }
      
    }
  
    // Helper function
    // findMinNode()
    // getRootNode()
    getRootNode()
    {
        return this.root;
    }
    // inorder(node)
    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    // preorder(node)               
    // postorder(node)
    // search(node, data)
}

