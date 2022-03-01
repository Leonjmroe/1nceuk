import './item_admin.css';

export default function ItemAdmin() {

return (
  <div className="adminCont">
    <div className="usernameCont">
      <div className="usernameTitle">Username:</div>
      <input className="username" type="text"/>
    </div>
    <div className="passwordCont">
      <div className="passwordTitle">Password:</div>
      <input className="password" type="text"/>
    </div>  
    <div className="login">Login</div>
  </div>
)}

