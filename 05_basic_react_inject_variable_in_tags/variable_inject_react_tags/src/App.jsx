
function App() {
  // declare a variable ---------------------------->
  const username = 'Rakibul Rahman';

  return (
    <h1>My name is {username}</h1>
  )
}

export default App

//! note: when you need inject variable in tags use curly braces {inject variable name in here};
//! note: {} it's call evaluate execution, because here we cannot write directly javascript code, after evaluate the javascript code then we write javascript evaluate code;