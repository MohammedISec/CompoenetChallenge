// import logo from './logo.svg';
import "./App.css";
import Hder from "./Hder";
import Post from "./post";
import Bottuns from "./Bottuns";
function App() {
  // const tasks=[
  //   {id:1, title:"One"},
  //   {id:2, title:"Two"},
  //   {id:3, title:"Three"},
  //   {id:4, title:"Four"}
  // ]
  // const mytask=tasks.map((task)=>{
  //   return <li style={{width:"30%", justifyContent:"center"}} key={task.id}>{task.title}</li>
  // })
  const posts = [
    { id: 1, title: "First Title", body: "First Body" },
    { id: 2, title: "Second Title", body: "Second Body" },
    { id: 3, title: "Third Title", body: "Third Body" },
    { id: 4, title: "Fourth Title", body: "Fourth Body" },
  ];
  const mypost = posts.map((post) => {
    return <Post title={post.title} body={post.body} key={post.id} />;
  });
  return (
    <div className="App">
      <Hder />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            {mypost}

            {/* <Post title="First Title" body="First Body"/>
            <Post title="Second Title" body="Second Body"/>
            <Post title="Third Title" body="Third Body"/>
            <Post title="Fourth Title" body="Fourth Body"/> */}
          </div>
          <div style={{ width: "30%" }}>
            <Bottuns />
          </div>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
