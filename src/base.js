import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBefjBn3JHe7Xku5zFpoouLjGqXFsxcSaI",
  authDomain: "budget-application-7d4f5.firebaseapp.com",
  databaseURL: "https://budget-application-7d4f5.firebaseio.com",
  projectId: "budget-application-7d4f5"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;
