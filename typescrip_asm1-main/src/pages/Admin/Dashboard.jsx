import React from 'react';
function onClickDB(){
    location.assign("http://localhost:5173/admin/product")
}
const Dashboard = () => {
   
  return (
    <div className="dashboard">
      <div className="menu">
        <div className="menu-item"><button onClick={onClickDB}>Product List</button></div> 
      </div>
      <div className="content">
        {/* Content */}
      </div>
    </div>
  );
};

export default Dashboard;