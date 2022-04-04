const Item = ({ id, note, date, time, deleteData,submittingData }) => {
  
  function deleteItem() {
    submittingData.current=true;
    deleteData(function (prevData) {
      return prevData.filter((item) => item.id !== id);
    });
  }
const buttonCss={
  padding:"10px",
  paddingRight:"20px",
  paddingLeft:"20px",
  float:'right',
  
}
const itemCss={
  border:"5px solid black",
  width:"400px",
  height:"100px",
}
const itemTextCss={
  float:'left',
  width:"320px",
  height:"100px"
}

const noteCss={
}

  return (
    <div className="item" style={itemCss}>
      <div style={itemTextCss}>
        <p style={noteCss}>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove" style={buttonCss}>
        刪除
      </button>
    </div>
  );
};

export default Item;
