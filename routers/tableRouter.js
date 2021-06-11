const router = require("express").Router();
const {Table} = require("../models/tableModel");

router.get("/", (req, res) => {
    Table.find().exec((err, tables) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, tables: tables });
    });
  });
  
   router.get("/detail/:id", (req, res) => {
     let id = req.params.id;
   
     Table.findById(id, function (err, table) {
       if (err) return res.json({ success: false, error: err });
       return res.json({ success: true, table });
     });
   });
  
   router.post("/add", (req, res) => {
     const table = new Table(req.body);
     table.save((err) => {
       if (err) return res.status(400).json({ success: false, err });
       return res.status(200).json({ success: true });
     });
   });
  
   router.put("/update/:id", (req, res) => {
     Table.findByIdAndUpdate(
       req.params.id,
       {
         $set: req.body,
       },
       (err, data) => {
         if (err) returnres.status(400).json({ success: false, err });
         return res.status(200).json({ success: true });
       }
     );
   });

   router.delete("/delete/:id", (req, res) => {
     Table.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
       if (error) {
         res.send(error);
       }
       return res.json(deletedItem);
     });
   });
  
  module.exports = router;