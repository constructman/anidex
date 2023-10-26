const express = require("express");
const cors = require("cors");
const dbConnect = require("../monogdb/dbConnect");
const bcrypt = require("bcrypt")
const User = require("../monogdb/Schemas/User.js")
const Session = require("../monogdb/Schemas/Session.js")
const cookieParser = require('cookie-parser')

const port = 5000;
const app = express();
const maxAge =  1000 * 60 * 60 * 24;

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/isAuth", (req, res) => {
  console.log(req.cookies);
  Session.findOne({ _id: req.cookies.sessionId })
  .then((data) => {
    if (data){
      console.log(data);
      res.status(201).send(true)
    } else {
      res.status(401).send(false)
    }
  })
  .catch((error) => res.status(401).send(error))
  
})

app.post("/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });
     
      
      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          new Session({}).save().then(session =>{
            console.log(Session)
            response.status(201).cookie('sessionId', session._id, { maxAge }).send({
              message: "User Created Successfully",
              result,
            });
          })
         
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          console.log(error);
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });

});

app.post('/login', (request, response) => {
  // console.log(request.body.email)

  User
    .findOne({ email: request.body.email })
    .then((user) => ({
      user,
      passwordCheck: bcrypt.compare(request.body.password, user.password)
    }))
    .then(({ user, passwordCheck }) => {
      // let session;

      if (!passwordCheck) {
        return response.status(400).send({
          message: "Passwords does not match",
          error,
        });
      }

      // session = request.session;
      // session.userid = request.body.email;
      new Session({}).save().then(session =>{
        console.log(Session)
        response
        .status(201)
        .cookie('sessionId', session._id, { maxAge })
        .send({
          message: "Loged in Successfully",
          user,
        });
      });

      response.status(200).send({
        message: "Login Successful",
        email: request.body.email
      });
      responce.redirect('/');
    })
    .catch((e) => {
      response.status(404).send({ message: "Email not found" });
    });

});

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  dbConnect();
  console.log(`Server is running on port: ${port}`);
});
