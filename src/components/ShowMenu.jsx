import React from "react";
import weekDays from "./weekDays";
import Table from "react-bootstrap/Table";

function ShowMenu(props) {
    
  
    const today = props.today;
  
    const [todayMenu] = weekDays.filter(function (activeDay) {
      return activeDay.day === today;
    });
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Ruoka</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{todayMenu.kasvis.receipe}</td>
            <td>{todayMenu.kasvis.price}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{todayMenu.kana.receipe}</td>
            <td>{todayMenu.kana.price}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{todayMenu.lammas.receipe}</td>
            <td>{todayMenu.lammas.price}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{todayMenu.kala.receipe}</td>
            <td>{todayMenu.kala.price}</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  export default ShowMenu;