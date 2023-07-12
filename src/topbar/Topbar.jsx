import "./topbar.css";

function Topbar() {
  return (
    <>
      <div className="top">
        
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
                <li className="topList-item">HOME</li>
                <li className="topList-item">ABOUT</li>
                <li className="topList-item">CONTACT</li>
                <li className="topList-item">WRİTE</li>
                <li className="topList-item">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <i className=" topSeacrhIcon fa-solid fa-magnifying-glass"></i>

        </div>
      </div>
    </>
  );
}

export default Topbar;
