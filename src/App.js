import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState("");
  const [db, setDB] = useState([]);
  const [dublicates, setDublicates] = useState(false);
  const [update, setUpdate] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
    setTimeout(() => {
      setDublicates(false);
    }, 5000);
  }, [dublicates]);

  const handleSubmit = () => {
    setDB((prev) => {
      if (prev.some((e) => e === data)) {
        setDublicates(true);
        return [...prev];
      }
      return [...prev, data];
    });
    setData("");
  };
  const handleEdit = (e, i) => {
    db.forEach((item) => {
      if (item === e) {
        setData(item);
        setDeleteIndex(i);
      }
    });
    setUpdate(true);
  };
  const handleUpdate = () => {
    const item = [...db];
    item.splice(deleteIndex, 1, data);
    setDB(item);
    setUpdate(false);
    setData("");
    setDeleteIndex(null);
  };
  const handleDelete = (i) => {
    const item = [...db];
    item.splice(i, 1);
    setDB(item);
    setUpdate(false);
    setData("");
  };

  return (
    <div className="App">
      <h1>React CRUD Operations</h1>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        ref={focus}
      />
      {update ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
      {dublicates && (
        <>
          <br />
          <span style={{ color: "red" }}>Dublicates are not allowed</span>
        </>
      )}
      <br />
      {db?.length ? (
        <table className="tableContainer">
          <tr className="flex">
            <th style={{ fontWeight: "700" }}>List</th>
            <th
              style={{
                color: "green",
                fontWeight: "700",
              }}
            >
              Edit
            </th>
            <th style={{ color: "red", fontWeight: "700" }}>Delete</th>
          </tr>
          {db?.map((item, i) => {
            return (
              <tr key={item} className="flex">
                <td>{item}</td>
                <td
                  style={{ cursor: "pointer", marginTop: "5px" }}
                  onClick={(e) => {
                    handleEdit(item, i);
                    e.stopPropagation();
                  }}
                >
                  Edit
                </td>
                <td
                  style={{ cursor: "pointer", marginTop: "5px" }}
                  onClick={(e) => {
                    handleDelete(i);
                    e.stopPropagation();
                  }}
                >
                  Delete
                </td>
              </tr>
            );
          })}{" "}
        </table>
      ) : (
        <div className="empty">List is Empty</div>
      )}
    </div>
  );
}
