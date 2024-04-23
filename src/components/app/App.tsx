import { Card } from "../card/Card";
import { CardPropsIntf } from "../../model/CardPropsIntf";

function App() {

  const Body = (props: CardPropsIntf) => {
    const {title, content, buttontext} = props;
    if (title !== "") {
      return (
        <>
          <div className="title">{title}</div>
          <div className="content">{content}</div>
          <button>{buttontext}</button>
        </>
      );
    }
    else {
      return (
        <>
          <div className="content">{content}</div>
          <button>{buttontext}</button>
        </>
      );
    }
  }

  return (
    <>
      <Card>
        <Body cardtype="" title="Card title" content="Some quick example text to build on the card title and make up the bulk of the card's content" buttontext="Go somewhere"/> 
      </Card>
      <Card>
        <Body cardtype="" title="" content="Some quick example text to build on the card title and make up the bulk of the card's content" buttontext="Go somewhere"/> 
      </Card>
    </>
  )
}

export default App

