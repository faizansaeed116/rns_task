const router = require('express').Router();
const Order = require('../model/order');

const BinaryTree = require('../binarytree/binaryTree');
const tree = new BinaryTree();
//Registeration  route
router.post("/postOrder", (req, res) => {

    
    
    const order = new Order({
      side: req.body.side,
      price: req.body.price
    });

    try {
        const postorder = order.save();
        res.send({order: order._id});
        matchedData=tree.insert(order);
        if(matchedData){
            order.deleteMany({ _id: order._id, _id: matchedData._id }, function (err) {
                if(err) console.log(err);
                console.log("Successful deletion");
              });
        }
        root = tree.getRootNode();
        console.log(root);
        tree.inorder(root);
      
    } catch (err) {
      res.status(404).send(err);
    }

  });
  module.exports = router;
