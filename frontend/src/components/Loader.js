// // import React, { useState } from 'react';
// // import Lottie from 'react-lottie';
// // // import animationData from './pinjump.json';

// // const LottieControl = () => {
// //   const [isStopped, setIsStopped] = useState(false);
// //   const [isPaused, setIsPaused] = useState(false);

// //   const buttonStyle = {
// //     display: 'block',
// //     margin: '10px auto'
// //   };

// //   const defaultOptions = {
// //     loop: true,
// //     autoplay: true,
// //     // animationData: animationData,
// //     rendererSettings: {
// //       preserveAspectRatio: 'xMidYMid slice'
// //     }
// //   };

// //   return (
// //     <div>
// //       <Lottie
// //         options={defaultOptions}
// //         height={400}
// //         width={400}
// //         isStopped={isStopped}
// //         isPaused={isPaused}
// //       />
// //       <button style={buttonStyle} onClick={() => setIsStopped(true)}>stop</button>
// //       <button style={buttonStyle} onClick={() => setIsStopped(false)}>play</button>
// //       <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>pause</button>
// //     </div>
// //   );
// // };

// // export default LottieControl;

// import React from 'react'
// import Lottie from 'react-lottie';
// // import * as animationData from './pinjump.json'
 
// export default class LottieControl extends React.Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {isStopped: false, isPaused: false};
//   }
 
//   render() {
//     const buttonStyle = {
//       display: 'block',
//       margin: '10px auto'
//     };
 
//     const defaultOptions = {
//       loop,
//       autoplay, 
//       animationData,
//       rendererSettings
//     };
 
//     return <div>
//       <Lottie options={defaultOptions}
//               height={400}
//               width={400}
//               isStopped={this.state.isStopped}
//               isPaused={this.state.isPaused}/>
//       <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
//       <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
//       <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
//     </div>
//   }
// }
import { Hearts } from  'react-loader-spinner'
<Hearts 
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
