import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: new Date().getFullYear()
    };
  }

  render() {
    return (
      <>
    

       {/* Second Footer */}
       <footer className="second-footer">
       <div className="container">
         <div className="footer-content">
           <span>&copy;</span>
           <span>{this.state.currentYear}</span>
           <span style={{textAlign:'center'}}> themandap. All rights reserved.</span>
         </div>
       </div>
     </footer>
     </>
  );
  }
}

export default Footer;


