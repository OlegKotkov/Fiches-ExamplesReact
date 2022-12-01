function PetInfo(props) {
  const { animal, make, hasPet } = props;
  return hasPet ? (
    <h1>{`My ${animal} make ${make}`}</h1>
  ) : (
    <h2>I dont have an animals</h2>
  );
}

export default PetInfo;
