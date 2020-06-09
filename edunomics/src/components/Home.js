import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import glasses from "../resources/glasses.jpg";
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component {
  // renderAdmin(stream) {
  //   if (stream.userId === this.props.currentUserId) {
  //     return (
  //       <div className="right floated content">
  //         <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
  //           Edit
  //         </Link>
  //         <Link
  //           to={`/streams/delete/${stream.id}`}
  //           className="ui button negative"
  //         >
  //           Delete
  //         </Link>
  //       </div>
  //     );
  //   }
  // }

  // renderList() {
  //   return this.props.streams.map(stream => {
  //     return (
  //       <div className="item" key={stream.id}>
  //         {this.renderAdmin(stream)}
  //         <i className="large middle aligned icon camera" />
  //         <div className="content">
  //           <Link to={`/streams/${stream.id}`} className="header">
  //             {stream.title}
  //           </Link>
  //           <div className="description">{stream.description}</div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  // renderCreate() {
  //   if (this.props.isSignedIn) {
  //     return (
  //       <div style={{ textAlign: 'right' }}>
  //         <Link to="/streams/new" className="ui button primary">
  //           Create Stream
  //         </Link>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div style={{ paddingBottom: "2.5rem", height: "100vh" }}>
          <img
            style={{
              zIndex: "-1",
              position: "absolute",
              width: "100%",
              height: "90vh",
            }}
            src={glasses}
            alt="background"
          />
          <Header style={{ position: "absolute" }} />
        </div>
        <Footer />
        {/* <h2>Streams</h2>
          <div className="ui celled list">{this.renderList()}</div>
          {this.renderCreate()} */}
      </div>
    );
  }
}

//   const mapStateToProps = state => {
//     return {
//       streams: Object.values(state.streams),
//       currentUserId: state.auth.userId,
//       isSignedIn: state.auth.isSignedIn
//     };
//   };

//   export default connect(
//     mapStateToProps,
//     { fetchStreams }
//   )(StreamList);

export default Home;
