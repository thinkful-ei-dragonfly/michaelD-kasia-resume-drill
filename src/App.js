/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';



function App() {
  return (
    <div className="App" >
      <body className="App-body" role="body" >
        <main className="App-main" role="main" >
          <header className="App-header" role='banner'>
            <h1>'SALLY'S RESUME'</h1>
            <section role="photo">
              <img src="https://archive.org/download/nasahqphoto-7316006270/nasahqphoto-7316006270.jpg" width="200" height="200"
                alt="Sally's Profile Picture" />
            </section>
            <section role="contact">
              <h4>Email: <a href="mailto:sallystudent@gmail.com">sallystudent@gmail.com</a></h4>
              <h4>Phone: <a href="tel:555-555-5555">(555)-555-5555</a></h4>
            </section>
          </header>
          <section role="Education">
            <h2><b><u>Education</u></b></h2>
            <ul>
              <li>
                <strong>Bachelor of Arts, Economics</strong>
              </li>
            </ul>
          </section>
          <section role="experience">
            <h2><b><u>Professional Experience</u></b></h2>
            <h3>Full Stack Developer</h3>
            <em>Google, Sacramento, CA (Jan 2012 – Present)</em>
            <ul>
              <li>Code and support product via HTML, CSS, and JS.</li>
            </ul>
            <h3>Front Ent Developer</h3>
            <em>Webcorp, Cherry Hill, NJ (Feb 2011 - Dec 2011)</em>
            <ul>
              <li>Rapidiously synergized user-centric architectures.</li>
              <li>Morphed clicks-and-mortar experiences.</li>
            </ul>
          </section>
        </main>
        <address>
          <p><a href="mailto:sallystudent@gmail.com">Contact Me</a></p>
        </address>
      </body>
    </div>
  );
}

export default App;
