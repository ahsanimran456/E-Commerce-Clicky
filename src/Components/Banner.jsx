// import {  useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function Banner() {
//     const [Selected, setSelected] = useState(1);
//     // const [Bannermodtion, setBannermodtion] = useState({
//     //     animate: { y: 0, opacity: 1 },
//     //     initial: { y: 200, opacity: 0 },
//     //     transition: { duration: 1 },
//     //     exit: { y: 0, opacity: 0 },
//     // });

//     // useEffect(() => {
//     //     const newVariants = {
//     //         animate: { y: 0, opacity: 1 },
//     //         initial: { y: -10, opacity: 0 },
//     //         exit: { y: 0, opacity: 0 },
//     //         transition: { duration: 1 }
//     //     };
//     //     setBannermodtion(newVariants);
//     // }, [Selected]);

//     return (
//         <div className="banner">
//             {Selected === 1 && (
//                 // <motion.div
//                 //     key={1}
//                 //     initial={Bannermodtion.initial}
//                 //     animate={Bannermodtion.animate}
//                 //     exit={Bannermodtion.exit}
//                 //     transition={Bannermodtion.transition}
//                 // >
//                 <div className="banner-container">
//                     <img
//                         src={require('../Assests/webbanner.jpg')}
//                         alt=""
//                     />
//                     {/* <div className="banner-text">
//                         <h3>
//                             Summer Sale
//                         </h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor corporis veniam voluptas ex ipsum ad asperiores odio laudantium! Numquam, temporibus sed? Deleniti qui natus perspiciatis iste laboriosam? Earum, veritatis.
//                         </p>
//                     </div> */}
//                 </div>
//                 // </motion.div>
//             )}
//             {Selected === 2 && (

//                 <div className="banner-container">
//                     <img
//                         src={require('../Assests/webbanner2.jpg')}
//                         alt=""
//                     />
//                     {/* <div className="banner-text">
//                         <h3>
//                             Summer Sale
//                         </h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor corporis veniam voluptas ex ipsum ad asperiores odio laudantium! Numquam, temporibus sed? Deleniti qui natus perspiciatis iste laboriosam? Earum, veritatis.
//                         </p>
//                     </div> */}
//                 </div>
//             )}
//             {Selected === 3 && (

//                 <div className="banner-container">
//                     <img
//                         src={require('../Assests/baner3.jpg')}
//                         alt=""
//                     />
//                     {/* <div className="banner-text">
//                         <h3>
//                             Summer Sale
//                         </h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor corporis veniam voluptas ex ipsum ad asperiores odio laudantium! Numquam, temporibus sed? Deleniti qui natus perspiciatis iste laboriosam? Earum, veritatis.
//                         </p>
//                     </div> */}
//                 </div>
//             )}
//             {Selected === 4 && (

//                 <div className="banner-container">
//                     <img
//                         src={require('../Assests/make a picture for my clothing line.jpg')}
//                         alt=""
//                     />
//                     {/* <div className="banner-text">
//                         <h3>
//                             Summer Sale
//                         </h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor corporis veniam voluptas ex ipsum ad asperiores odio laudantium! Numquam, temporibus sed? Deleniti qui natus perspiciatis iste laboriosam? Earum, veritatis.
//                         </p>
//                     </div> */}
//                 </div>
//             )}

//             <div className="selectors">
//                 <input
//                     type="radio"
//                     name="banner"
//                     defaultChecked
//                     value={1}
//                     onChange={() => setSelected(1)}
//                 />
//                 <input
//                     type="radio"
//                     name="banner"
//                     value={2}
//                     onChange={() => setSelected(2)}
//                 />
//                 <input
//                     type="radio"
//                     name="banner"
//                     value={3}
//                     onChange={() => setSelected(3)}
//                 />
//                 <input
//                     type="radio"
//                     name="banner"
//                     value={4}
//                     onChange={() => setSelected(4)}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Banner;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Banner() {
    const [Selected, setSelected] = useState(1);
    const [selectedData, setSelectedData] = useState({
        1: require('../Assests/webbanner.jpg'),
        2: require('../Assests/webbanner2.jpg'),
        3: require('../Assests/baner3.jpg'),
        4: require('../Assests/webbanner2.jpg'),
    });
    return (
        <div className="banner">
            <div className="banner-container">
                <img
                    src={`${selectedData[Selected]}`}
                    alt=""
                />
            </div>
            <div className="selectors">
                <input
                    type="radio"
                    name="banner"
                    defaultChecked
                    value={1}
                    onChange={() => setSelected(1)}
                />
                <input
                    type="radio"
                    name="banner"
                    value={2}
                    onChange={() => setSelected(2)}
                />
                <input
                    type="radio"
                    name="banner"
                    value={3}
                    onChange={() => setSelected(3)}
                />
                <input
                    type="radio"
                    name="banner"
                    value={4}
                    onChange={() => setSelected(4)}
                />
            </div>
        </div>
    );
}

export default Banner;
