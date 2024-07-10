// import React, { useState } from 'react';
// import './forgotPassword.css'

// const forgotPassword = () => {
//     const [ data, setData ] = useState({
//         email: "",
//     });

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name] : input.value });
//     }

//   return (
//     <div className='forgotPassword'>
//         <div className="forgotContainer">
//             <div className="top">
//                 <h1>Reset Password</h1>
//             </div>
//             <div className="bottom">
//                 <form action="submit">
//                 <div className="email">
//                         <input 
//                             type='email'
//                             placeholder='email'
//                             name='email'
//                             onChange={handleChange}
//                             value= {data.email}
//                             required
//                             className='details'
//                         />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default forgotPassword;