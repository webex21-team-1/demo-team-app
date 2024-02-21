function Square() {
  return <button className="square">　</button>;
}

export const Entry1 = () => {
  return (
    <>
      <h1>やまっちの作業</h1>
      <div>エントリー1の内容</div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
};
