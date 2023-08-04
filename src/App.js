// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// function App() {
//   return (
    // <div className="App">
        //   <div className="background-image">
        {/* /* <!-- <p>here is the 4th day session which shows how JS is linking with HTML.<a href="linkwithjs.html">click here to view it</a></p> --> */} 
        // <div className="details-section">
            {/* <!-- <div class="profile-photo"> --> */}
                {/* <!-- Add your profile photo here --> */}
                {/* <!-- <img src="asset\1667532213675.jpg" alt="My_Profile"> --> */}
            {/* <!-- </div> --> */}
            // <div className="details-content">
                // <h2 className="name-box">Naga Hari Priyan M</h2>
                // <hr></hr>
                // <p>
                // <MyComp1 />
                    // I'm a Web Developer, Diploma Graduate, Artificial Intelligence and Data Science Student
                // </p>
                // <hr></hr>
                {/* <!-- <p>Contact details</p> --> */}
                {/* <!-- Add other details like social media links, hobbies, introduction, etc. here --> */}
                // <p>Social Media:</p> 
                // <ul className="social-icons">
                    // <li><a href="https://www.instagram.com/mr.smart.solver_official/"><i className="fab fa-instagram">Instagram</i></a></li>
                    // <li><a href="https://www.linkedin.com/in/naga-hari-priyan-m-373804215"><i className="fab fa-linkedin">Linkedin</i></a></li>
                    {/* <!-- Add more social media links here --> */}
                // </ul>
                // <hr></hr>
                // <p>Hobbies: Reading, Painting</p><hr></hr>
                // <p>
                    // Introduction:<hr></hr>
                    // Enthusiastic and results-driven AI & Data Science student with a passion for leveraging cutting-edge technologies to solve real-world challenges. 
                    // Currently pursuing a <b><i>B.Tech[Artificial Intelligence and Data Science]</i></b> at <b><i>Kumaraguru College of Technology, Coimbatore, Tamilnadu</i></b>, with a focus on acquiring expertise in AI, machine learning, and data analysis. 
                    // Proficient in Python, R, and various data manipulation libraries, along with a strong foundation in statistical analysis and data visualization. 
                    // Eager to contribute my skills and knowledge to innovative projects and collaborate with teams to drive data-driven insights and solutions.  
                    // Committed to continuous learning and staying abreast of the latest advancements in the field of AI and Data Science.
                // </p>
                // <hr></hr>
                // <h4>Full Stack Workshop:</h4>
                // <p style="position:unset;">here is the practiced file page in which we worked out with HTML, CSS, JS.<a href="linkwithjs.html"><i>click here to view it</i></a></p>
            // </div>
        // </div>
        // <div className="name-box">
            // <h1 style="font-family: cursive;">M Naga Hari Priyan Dipl.,B.Tech'</h1>
        // </div>
        // <br></br>
    // </div>
    // </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

const YearInfo = () => {
  const [message, setMessage] = useState('Initial message');

  const myfunfor1st = () => {
    setMessage("I am in my 1st year studying AI&DS dept");
  };

  const myfunfor2nd = () => {
    setMessage("I am in my 2nd year studying AI&DS dept");
  };

  const myfunfor3rd = () => {
    setMessage("I am in my 3rd year studying AI&DS dept");
  };

  const myfunfor4th = () => {
    setMessage("I am in my 4th year studying AI&DS dept");
  };

  return (
    <div>
      <button onClick={myfunfor1st}>Click for 1st Year</button>
      <button onClick={myfunfor2nd}>Click for 2nd Year</button>
      <button onClick={myfunfor3rd}>Click for 3rd Year</button>
      <button onClick={myfunfor4th}>Click for 4th Year</button>

      <p id="hello">{message}</p>
    </div>
  );
};

export default App;
