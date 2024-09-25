import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import Header from "../../components/header/header";

const Table = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("teacher");
  const [people, setPeople] = useState([]);
  const [highest, setHighest] = useState(null);

  useEffect(() => {
    console.log('Rendering Table')
  }, [])

  function addPerson() {
    setPeople([
      ...people,
      {
        name: name,
        profession: profession,
      },
    ]);

    setName("")
    setProfession("teacher")
  }

  function deletePerson (index) {
    const filtered = people.filter((_, i) => {
        return i !== index
    })
    setPeople(filtered)
  }

  useEffect(() => {
    const rankings = {
      teacher: 0,
      lawyer: 0,
      doctor: 0
    }

    if(people.length > 0) {
      for(const person of people) {
        if(person.profession === 'teacher') rankings.teacher ++
        if(person.profession === 'lawyer') rankings.lawyer ++
        if(person.profession === 'doctor') rankings.doctor ++
      }
      let high = 'teacher';
      if(rankings.lawyer > rankings.teacher ) high = 'lawyer'
      if(rankings.doctor > rankings.lawyer && rankings.doctor > rankings.teacher) high = 'doctor' 

      setHighest(high);
      console.log(high)
    }

  }, [people])


  return (
    <>
    <Header />
    <div className={styles.body}>
      <input
        type="text"
        placeholder="Enter Name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={profession} onChange={(e) => setProfession(e.target.value)}>
        <option value={'teacher'}>Teacher</option>
        <option value={'lawyer'}>Lawyer</option>
        <option value={'doctor'}>Doctor</option>
      </select>
      

      <button id="add" onClick={addPerson}>
        Add Person
      </button>
      <div>Highest: {highest}</div>
      <table id="table" border="1">
        <thead>
          <th>Name</th>
          <th>Profession</th>
          <th></th>
        </thead>
        <tbody id="table-body">
          {people.map((person, idx) => {
            return (
              <tr>
                <td>{person.name}</td>
                <td>{person.profession}</td>
                <td>
                  <button onClick={() => deletePerson(idx)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>

  );
};

export default Table;
