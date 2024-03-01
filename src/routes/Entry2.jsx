import { useState } from "react";
function Attendance() {
  return <button className="attendance"></button>;
}

export const Entry2 = () => {
  const [cards, setCards] = useState([
    {
      id: crypto.randomUUID(),
      text: "久山陽平",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1>陽平の作業</h1>
      <div>エントリー2の内容</div>
      <h1>出席管理</h1>
      <div className="add">
        <div className="main-container">
          <div className="list-container">
            <div className="list-header">出席リスト</div>
            <div className="card-container">
              {cards.map((card) => (
                <div className="card" key={card.id}>
                  <div className="atPeople">{card.text}</div>
                  <div
                    className="delete"
                    onClick={() => {
                      const updatedCards = cards.filter((tempCard) => {
                        return tempCard.id !== card.id;
                      });
                      setCards(updatedCards);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="list-footer">
          <div className="list-container">
            <input
              type="text"
              className="input-atPeople"
              value={inputValue}
              onInput={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div
              className="input-button"
              onClick={() => {
                if (inputValue === "") return;
                setCards([
                  ...cards,
                  { id: crypto.randomUUID(), text: inputValue },
                ]);
                setInputValue("");
              }}
            >
              出席
            </div>
          </div>
        </div>
      </div>
      <attendance>出席</attendance>
    </>
  );
};
/*import { useState } from "react";

export const Entry2 = () => {
  return (
  <>
    <h1>陽平の作業</h1>
    <div>エントリー2の内容</div>
  </>

  
    const [cards, setCards] = useState([
      {
        id: crypto.randomUUID(),
        text: "久山陽平",
      },
    ]);
    const [inputValue, setInputValue] = useState("");

   
      <>
        <h1>出席管理</h1>

        <div className="main-container">
          <div className="list-container">
            <div className="list-header">出席リスト</div>
            <div className="card-container">
              {cards.map((card) => (
                <div className="card" key={card.id}>
                  <div className="atPeople">{card.text}</div>
                  <div
                    className="delete"
                    onClick={() => {
                      const updatedCards = cards.filter((tempCard) => {
                        return tempCard.id !== card.id;
                      });
                      setCards(updatedCards);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="list-footer">
              <div className="list-container">
                <input
                  type="text"
                  className="input-atPeople"
                  value={inputValue}
                  onInput={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
                <div
                  className="input-button"
                  onClick={() => {
                    if (inputValue === "") return;
                    setCards([
                      ...cards,
                      { id: crypto.randomUUID(), text: inputValue },
                    ]);
                    setInputValue("");
                  }}
                >
                  出席
                </div>
              </div>
            </div>
          </div>
          <attendance>出席</attendance>
        </div>
      </>
    
    export default App;
  );
  
};
*/
