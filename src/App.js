import React, { useState } from 'react';
import Nav from "./components/nav";
import About from "./components/about";
import Gallery from "./components/gallery";
import ContactForm from "./components/contact";



function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* Notice the <> and </> that wrap the Gallery and About components. 
        Can you imagine what these are and what they might be for? 
        They are called React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>. */}

          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
            )}
        </div>
      </main>
    </div>
  );
}

export default App;

