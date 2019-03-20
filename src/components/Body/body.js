import React, { Component } from "react";
import { List } from "./list";

const StudentsList = [
  {
    id: 1,
    name: "Петя",
    age: 15,
    avatar:
      "https://zabavnik.club/wp-content/uploads/2018/02/Kartinki_lyudey_4_11135005.jpg"
  },
  {
    id: 2,
    name: "Женя",
    age: 18,
    avatar: "http://relaxic.net/wp-content/uploads/2012/07/Funny-People.jpg"
  },
  {
    id: 3,
    name: "Вадим",
    age: 21,
    avatar:
      "https://thumbs.dreamstime.com/t/%D1%80%D0%B0-%D0%BE%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B0%D1%80%D0%B5%D0%BD%D1%8C-%D0%B2%D1%8B%D0%BF%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BA%D0%BE%D1%84%D0%B5-61964191.jpg"
  }
];

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <List data={StudentsList} />
      </div>
    );
  }
}
