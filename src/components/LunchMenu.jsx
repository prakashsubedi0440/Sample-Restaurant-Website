import React, {useState} from "react";
import ShowMenu from "./ShowMenu";

function newDisplay(today, display) {
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    console.log(display);
    const dispIndex = day.findIndex((d) => {
      return d === today;
    });
  
    for (var i = 0; i < display.length; i++) {
      if (i !== dispIndex) {
        display[i] = false;
      }
    }
  
    if (display[dispIndex]) {
      display[dispIndex] = false;
    } else {
      display[dispIndex] = true;
    }
  
    return display;
  }
  

function LunchMenu() {

    const defaultDisp = [false, false, false, false, false];
    const [test, setTest] = useState(false);
    const [day, setDay] = useState("");
    const [display, setDisplay] = useState(defaultDisp);

    
    const [Monday, Tuesday, Wednesday, Thursday, Friday] = display;

    function handleClick(event) {
        const clickedDay = event.target.id;
        setDay(clickedDay);
        const temp = newDisplay(clickedDay, display);

        setDisplay(temp);

        if (!test) {
        setTest(true);
        } else {
        setTest(false);
        }
    }

    return(
        <div>
            <div class = "menu">
                <h2 id = "lunchMenu">LUNCH MENU</h2>
                <div className="menuContainer" onClick={handleClick}>
                <h2 id="Monday">Monday</h2>
                {Monday === true ? <ShowMenu today={day} /> : null}
                </div>

                <div className="menuContainer" onClick={handleClick}>
                <h2 id="Tuesday">Tuesday</h2>
                {Tuesday === true ? <ShowMenu today={day} /> : null}
                </div>

                <div className="menuContainer" onClick={handleClick}>
                <h2 id="Wednesday">Wednesday</h2>
                {Wednesday === true ? <ShowMenu today={day} /> : null}
                </div>

                <div className="menuContainer" onClick={handleClick}>
                <h2 id="Thursday">Thursday</h2>
                {Thursday === true ? <ShowMenu today={day} /> : null}
                </div>

                <div className="menuContainer" onClick={handleClick}>
                <h2 id="Friday">Friday</h2>
                {Friday === true ? <ShowMenu today={day} /> : null}
                </div>
            </div>
        </div>
    );
}

export default LunchMenu;