import "./App.css";
function App() {
    const name = <h1>Varun Rahul Matangi</h1>;
    const userDetails =
        <>
            <p>Country: India, Title: Mr, Gender: Male, Email: varunrahul@test.com, Phone Number: 9999999999</p>
        </>
    const footer =
        <footer className="footer">
            This is Footer
        </footer>
    const string ="Hi welcome to React: ";
    const version =18.2;
    return (
        <>
           <div style={{ textAlign: "center" }}>
               {string}{version}
               <div style={{ textAlign: 'center' , backgroundColor: 'aqua' }}>
                   {name}
                   {userDetails}
               </div>
               {footer}
           </div>
        </>
    )
}

export default App;
