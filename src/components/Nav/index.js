<<<<<<< HEAD
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

=======
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
// hook 
// const [currentCategory, setCurrentCategory] = useState(categories[0]);
const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
} = props;

  useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name); },
      [currentCategory]);
  
>>>>>>> gh-pages
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
<<<<<<< HEAD
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
=======
          <span role="img" aria-label="camera">📸</span>Oh Snap!
>>>>>>> gh-pages
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
<<<<<<< HEAD
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
=======
            <li className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`} key={category.name}>
>>>>>>> gh-pages
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
