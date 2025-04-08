import TaButton from "./TaButton";

function Bottuns() {
  const tbs = [
    {
      id: 1,
      title: "مقالات اليوم",
      c: (
        <div>
          <span>😁</span>
          {/* <img alt="" width="30%" scr="https://upload.wikimedia.org/wikipedia/commons/9/94/Miracle_Garden_1.jpg"/>  */}
        </div>
      ),
    },
    {
      id: 2,
      title: "المقالات",
      c: (
        <div>
          <span>😁😁😁</span>
        </div>
      ),
    },
    {
      id: 3,
      title: "الاكثر انتشاراً",
      c: (
        <div>
          <span>😁</span>
        </div>
      ),
    },
    {
      id: 4,
      title: "",
      c: (
        <div>
          <span>😁</span>
        </div>
      ),
    },
  ];
  const mytb = tbs.map((tb) => {
    return (
      <TaButton title={tb.title} key={tb.id}>
        {tb.c}
      </TaButton>
    );
  });
  return (
    <div
      style={{
        border: "solid teal 5px",
        margin: "25px",
      }}
    >
      {mytb}

      {/* <TaButton title="first title">
               <div>
                <span>😁</span>
                 <img scr="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravnook.com%2Far%2F%25D8%25A3%25D9%2581%25D8%25B6%25D9%2584-15-%25D8%25AD%25D8%25AF%25D9%258A%25D9%2582%25D8%25A9-%25D8%25B4%25D8%25AA%25D9%2588%25D9%258A%25D8%25A9-%25D8%25AE%25D9%2584%25D8%25A7%25D8%25A8%25D8%25A9-%25D8%25AD%25D9%2588%25D9%2584-%25D8%25A7%25D9%2584%25D8%25B9%25D8%25A7%25D9%2584%25D9%2585%2F&psig=AOvVaw0NS7cvHRx1vFPvAl9WgXua&ust=1742496482670000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPia8LDnlowDFQAAAAAdAAAAABAE"></img> 
                </div>
            </TaButton>
            <TaButton title="second title" >
            <div>
                <span>😁</span>
                 {/* <img scr="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravnook.com%2Far%2F%25D8%25A3%25D9%2581%25D8%25B6%25D9%2584-15-%25D8%25AD%25D8%25AF%25D9%258A%25D9%2582%25D8%25A9-%25D8%25B4%25D8%25AA%25D9%2588%25D9%258A%25D8%25A9-%25D8%25AE%25D9%2584%25D8%25A7%25D8%25A8%25D8%25A9-%25D8%25AD%25D9%2588%25D9%2584-%25D8%25A7%25D9%2584%25D8%25B9%25D8%25A7%25D9%2584%25D9%2585%2F&psig=AOvVaw0NS7cvHRx1vFPvAl9WgXua&ust=1742496482670000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPia8LDnlowDFQAAAAAdAAAAABAE"></img>  */}
      {/* </div>
            </TaButton>
            <TaButton title="third title" >
            <div>
                <span>😁</span>
                 <h1>hello</h1>
                </div>
            </TaButton>
            <TaButton title="fourth title" />
            <TaButton title="" /> */}
    </div>
  );
}
export default Bottuns;
