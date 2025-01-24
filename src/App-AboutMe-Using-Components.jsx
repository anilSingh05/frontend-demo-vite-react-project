import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

// About-Me Project  using Components

// What is a Component?
// A component is a reusable piece of code that defines the structure and behavior of a user interface.
// Components are the building blocks of a React application and can be composed together to 
// Create complex user interfaces.
// Components can be functional components or class components.
// Functional components are simple functions that return JSX elements.
// Class components are ES6 classes that extend the React.Component class.

function App() {

    const name = 'Anil Singh';
    const profession = 'Full Stack Software Developer';
    
    return (
        <div className='App'>
            {/* Header Section */}
            {Header(name, profession)}

            {/* About Section */}
            {About()}

            {/* Projects Section */}
            {Projects()}

            {/* Contact Section */}
            {ContactMe()}
            
            {/* Footer Section */}
            {Footer()}

        </div>
    )
}

export default App;

