const express = require("express");
const connection = require("../connection");
const router = express.Router();
require("dotenv").config();

router.post("/post", (req, resp) => {
  let data = [req.body.email, req.body.phone];
  query =
    "select name,email,phone,gender,occupation from user where email=? or phone=?";
  connection.query(query, data, (err, result) => {
    if (!err) {
      if (result.length <= 0) {
        let info = req.body;
        let data = [info.name, info.email, info.phone, info.gender, info.occupation,];
        query = "insert into user (name,email,phone,gender,occupation) values (?,?,?,?,?)";
        connection.query(query, data, (err, result) => {
          if (!err) {
            return resp
              .status(200)
              .json({ message: "submit data successfully !!!" });
          } else {
            return resp.status(500).json(err);
          }
        });
      } else {
        return resp
          .status(404)
          .json({ message: "email or phone number aleady exist" });
      }
    } else {
      return resp.status(500).json(err);
    }
  });
});

router.get("/get", (req, resp) => {
  query = "select * from user";
  connection.query(query, (err, result) => {
    if (!err) {
      return resp.status(200).json(result);
    } else {
      return resp.status(500).json(err);
    }
  });
});

router.put("/update/:id",(req,resp)=>{
  let user = req.body;
  let data =[ user.name,
    user.email,
    user.phone,
    user.gender,
    user.occupation,req.params.id];
    query="update user  set name=?,email=?,phone=?,gender=?,occupation=?  where id=? "
    connection.query(query,data,(err,result)=>{
      if(!err){
        if(result.affectedRows == 0){
          return resp.status(404).json({ message: "user id does not exist" });
        }
        else{
          return resp.status(200).json({ message: "Data Update Successfully !!!" });

        }

      }
      else{
        return resp.status(500).json(err);
      }

    })
})


router.delete("/delete/:id",(req,resp)=>{
  query="Delete from user where id =?";
  connection.query(query,[req.params.id],(err,result)=>{
    if(!err){
      if(result.affectedRows == 0){
        return resp.status(404).json({ message: "user id does not exist" });
      }
      else{
        return resp.status(200).json({ message: "Data Delete Successfully !!!" });

      }

    }
    else{
      return resp.status(500).json(err);
    }

  })
})
module.exports = router;
