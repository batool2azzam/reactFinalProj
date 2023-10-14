import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext('');

export const ThemeContextProvider = ({ children }) => {

  const [selectedTheme, setSelectedTheme] = useState("dark");
  const darkMode = {
    main: "Black",
    secendary: "#ffff",
    third: "#282f34",
    four: "White",
    five: "Black",
    seven: "#1d2226",
    eigth: "#fff",
    nine: "white"




  }

  const lightMode = {
    main: "White",
    secendary: "#494949",
    four: "Black",
    five: "Black",
    eigth: "#1877f2",
    nine: "#1877f2"
  }
  const [Theme, setTheme] = useState(darkMode);
  useEffect(() => {
    if (selectedTheme == "dark") {
      setTheme(darkMode);
    }

    else {
      setTheme(lightMode);

    }
  }, [selectedTheme])

  return (
    <ThemeContext.Provider value={{ Theme: Theme, selectedTheme: selectedTheme, setSelectedTheme: setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;