import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add,submittingData }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submittingData.current =true
    add(function (prevData) {
      return [
        ...prevData,
        {
          id: v4(),
          note,
          date,
          time,
        },
      ];
    });
  }

  return (
    <div className="Edit">
      <h1>備忘錄</h1>
      <p>記事:</p>
      <input type="text" value={note} onChange={noteChange} className="editInput" />
      <p>日期:</p>
      <input type="date" value={date} onChange={dateChange} className="editInput" />
      <p>時間:</p>
      <input type="time" value={time} onChange={timeChange} className="editInput"/>
      <a onClick={addItem} className="editButton">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        新增
      </a>
    </div>
  );
};

export default Edit;
