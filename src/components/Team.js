import react from "react";

export default function Team(props) {
  let { team } = props.info;
  return (
    <>
      <div>{team}</div>
    </>
  );
}

// find an sports api that has all the logos
// finish formatting the team component and get the information where it needs to be
// pass the game information and odds to the team component so we can utilize it
