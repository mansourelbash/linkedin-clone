import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
import RequireAuth from "./components/RequireAuth";
import "./AllStyle.css";


// const addNewUser = (user) =>{
//   users.push(user);
// }
// addNewUser({name:'ali',age:44});
// console.log(users)

// console.log('mansour')
// console.log('ahmad')
// console.log('souad');

// const addUser = (user, callback) =>{
//   setTimeout(()=>{
//     users.push(user)
//     console.log('user added succucfully');
//     callback()
//   }, 3000)
// }



// addUser({name: 'ali'}, ()=>{
//   const checkUser = users.find((user)=>user.name === 'ali');
//   console.log(checkUser)
// })



var users = [{name: 'mansour', age: 28}, {name: 'ahmad', age: 30}];


// console.log('mansour');
// console.log('ahmad');
// const addUser = (user) =>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       users.push(user)
//       resolve();
//     }, 3000)
//   })
// }

// const getUser = async ()=>{
//   await addUser({name: 'ali'})
//   const checkUser = users.find((user) => user.name === 'ali');
//   console.log('user added succucfully')
//   console.log(checkUser);
// }
// getUser();

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      users.push({ name: 'moadd' });
      users.push({ name: 'saed' });
      resolve("mansour");
    } else {
      reject("error")
    }
  });
};


const getUsers = async () =>{
  try{
    await getAllUsers();
    console.log(users)

  }catch(err){

    console.log(err)
  }
}
getUsers();

// getAllUsers()
//   .then(() => {
//     console.log(users);
//   })
//   .catch((reject) => {
//     reject()
//   });


// const addUser = (user , callback) => {
//   setTimeout(()=>{
//     users.push(user);
//     callback();
//   }, 3000)
// }
  // addUser({ name: 'ali', age: 48 }, ()=>{
  //   const userSearch = users.find((user) => user.name === 'ali');
  //   console.log(userSearch)
  // });

  // const addList = (user, callback) =>{
//   setTimeout(() => {
//   users.push(user);
//   callback();
// }, 0);
// }





const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Header />
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (disptach) => {
  return {
    getUserAuth: () => disptach(getUserAuth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
