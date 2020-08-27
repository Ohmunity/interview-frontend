import React from 'react';

const Exercise03 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>Finally, we would like to make a quick simple fixes in the webapp.</p>

      <ol>
        <li>
          The <strong>Homepage</strong> is always "active" in the navbar, even
          when we go to any of the other pages. We need to activate the correct
          page depending on which page we are located. HINT: we use a library for the routes called <strong>Reach Router</strong>, and here's the instruction about how to make the buttons active https://reach.tech/router/example/active-links.
        </li>
        <li>
          We would like to remove the Homepage button from the navbar and make the Title clickable, which should take it to the homepage.
        </li>
      </ol>
    </div>
  );
};

export default Exercise03;
