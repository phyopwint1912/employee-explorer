import { Context } from "../Context";
import React, { useState, useEffect, useContext } from "react";

export default function UserCard({ name, depth }) {
  const [directSubs, setDirectSubs] = useState([]);
  const [position, setPosition] = useState(null);
  const appContext = useContext(Context);
  const { employees, setEmployees } = appContext;
  const URL = "https://api.additivasia.io/api/v1/assignment/employees";
  useEffect(() => {
    const getDirectSubs = async () => {
      const data = await fetch(URL + `/${name}`).then(res => {
        return res.json();
      });
      const directSubs = data[1] && data[1]["direct-subordinates"];
      const position = data[0];
      setPosition(position);

      if (!directSubs) return false;

      employees.forEach(person => {
        if (directSubs.indexOf(person) > -1) {
          directSubs.splice(directSubs.indexOf(person), 1);
        }
      });

      directSubs.forEach(sub => setEmployees(e => e.add(sub)));
      setDirectSubs(directSubs ? directSubs : []);
    };
    getDirectSubs();
  }, [URL, name, setEmployees, employees]);

  return (
    <div style={{ marginLeft: 10 * depth + "px" }}>
      {name} - {position}
      {directSubs.map(name => (
        <UserCard
          name={name}
          depth={depth + 1}
          key={name}
        />
      ))}
    </div>
  );
}
