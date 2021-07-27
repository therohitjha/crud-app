import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState("");
  const [db, setDB] = useState(() =>
  JSON.parse(localStorage.getItem("db"))
    ? JSON.parse(localStorage.getItem("db"))
    : []);
  const [dublicates, setDublicates] = useState(false);
  const [update, setUpdate] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDublicates(false);
    }, 5000);
  }, [dublicates]);

  const handleSubmit = () => {
    if (data) {
      setDB((prev) => {
        if (prev.some((e) => e === data)) {
          setDublicates(true);
          return [...prev];
        }
        localStorage.setItem("db", JSON.stringify([...prev, data]));
        return [...prev, data];
      });
      setData("");
    }
  };

  const handleEnterKeyPress = (event) => {
    if (data && event.charCode === 13) {
      setDB((prev) => {
        if (prev.some((e) => e === data)) {
          setDublicates(true);
          return [...prev];
        }
        localStorage.setItem("db", JSON.stringify([...prev, data]));
        return [...prev, data];
      });
      setData("");
    }
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
    const item =[...db];
    if (item.some((e) => e === data)) {
      setDublicates(true);
    } else {
      item.splice(deleteIndex, 1, data);
      localStorage.setItem("db", JSON.stringify(item));
      setDB(item);
      setUpdate(false);
      setData("");
      setDeleteIndex(null);
    }
  };


  const handleDelete = (i) => {
    const item = [...db];
    item.splice(i, 1);
    localStorage.setItem("db", JSON.stringify(item));
    setDB(item);
    setUpdate(false);
    setData("");
  };
  // localStorage.clear();
  console.log(db);
  return (
    <div className="App">
      <h1>React CRUD Operations</h1>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        autoFocus
        onKeyPress={handleEnterKeyPress}
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
          <thead
            className="flex"
            style={{ padding: ".5em", background: "cyan", marginTop: "5px" }}
          >
            <tr style={{ fontWeight: "700" }}>List</tr>
            <tr
              style={{
                color: "green",
                fontWeight: "700",
              }}
            >
              Edit
            </tr>
            <tr style={{ color: "red", fontWeight: "700" }}>Delete</tr>
          </thead>
          {db?.length &&
           db?.map((item, i) => {
              return (
                <tr key={item} className="flex list">
                  <td>{item}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      handleEdit(item, i);
                      e.stopPropagation();
                    }}
                  >
                    Edit
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
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
