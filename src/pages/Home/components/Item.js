const Item = ({ id, note, date, time, deleteData,submittingData }) => {
  
  function deleteItem() {
    submittingData.current=true;
    deleteData(function (prevData) {
      console.log(prevData.filter((item) => item.id !== id))
      return prevData.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item" >
      <div>
        <p className="itemP">記事:</p>
        <p className="itemP">{note===""?"空":note}</p>
        <p className="itemP">時間:</p>
        <p className="itemDate">{date}</p>
        <p className="itemTime">{time}</p>
      </div>
      <a onClick={deleteItem} className="editButton remove">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        刪除
      </a>
    </div>
  );
};

export default Item;
