import React, { Component } from "react";
import { ListElement } from "./listElements";

export class List extends Component {
  render() {
    const { data } = this.props;
    let temp;
    return (
      <div>
        {
          (temp = data.map(function(item) {
            return (
              <ListElement
                key={item.id}
                id={item.id}
                name={item.name}
                age={item.age}
                avatar={item.avatar}
              />
            );
          }))
        }
      </div>
    );
  }
}
