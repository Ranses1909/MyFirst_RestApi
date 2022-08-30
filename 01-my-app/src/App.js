import React from 'react';
// https://www.upgrad.com/blog/react-project-ideas-topics-beginners/

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import ReadyKeyboards from './components/ReadyKeyboards';
// in order to let react know that is a componet use capital Case
function App() {

    return (
        <>
        <Navbar />
        <Presentation />
        <hr />
        <ReadyKeyboards />
        </>

    )
}


export default App;