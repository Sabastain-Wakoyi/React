import React, { setState } from "react";


function List(props) {
    const allSpeakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 
    'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

    const [speakers, setSpeakers] = useState(allSpeakers)

    onSortAscendedClicked = () => {
        const sortedSpeakers = speakers.slice().sort();
        const reverseSpeakers = sortedSpeakers.slice().reverse();
        setState(sortedSReversedpeakers)

    }
        onSortDescendedClicked =() => {
            const sortedSpeakers = this.state.speakers.slice().sort();
            setSpeakers(sortedSpeakers)
        }

        onScottsClicked = () => {
            const onlyScotts = speakers.filter(name =>
                name.startsWith("Scott")
                );
                setState(onlyScotts);

            }

            onResetClicked = () => {
                setState(allSpeakers);
            }
  const spearkerListItems = speakers.map(speaker =>
    <li key={speaker}>{speaker}</li>
    )


return(
    <div className="Container">

   <div className="container">
    <button className="button" onClick={onSortAscendedClicked}>sortedSReversedpeakers</button>
    <button className="button" onClick={oonSortDescendedClicked}>sortedSpeakers</button>
    <button className="button" onClick={onScottsClicked}>Scott</button>
    <button className="button" onClick={onResetClicked}>Reset</button>
    
    </div>
<div className="container">
    <ul>{spearkerListItems}</ul>

</div>
    </div>
)

    }

    export default List