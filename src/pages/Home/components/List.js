import Item from "./Item";

const List = ({ listData, deleteData,submittingData }) => {
  return (
    <div className="List">
      {listData.map((item) => {
        const { id, note = "", date = "", time = "" } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingData={submittingData}
          />
        );
      })}
    </div>
  );
};

export default List;
