import React, { createContext } from 'react';

export const ThemeContext = createContext();

// 1) create context in a component
// 2) return JSX with Provider inside (ie. ThemeContext.Provider)
// 2.5) state is passed into the Provider
// 3) use ThemeContextProvider tags in another component
// 4) when we wrap components in the ThemeContextProvider they become children to the ThemeContextProvider component
// 5) in the ThemeContextComponent they accessible as {this.props.children}

// // create a component with state that will contain 
// // that data we want to share between different components
class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd' , bg: '#eee'}, 
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }

}

export default ThemeContextProvider;
