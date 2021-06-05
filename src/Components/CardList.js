import React from "react";
import Card from "./Card";
import "./card.css";
const CardList = ({people }) => {
  return (
    <div className="cardlist">
      {people.map((user, i) => {
        return (
          <Card
            key={i}
            name={people[i].name}
            email={people[i].email}
            tech={people[i].tech}
            image={people[i].image}
          />
        );
      })}
    </div>
  );
}

export default CardList;
