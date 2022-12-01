function PetInfo(props) {
  const { animal, make } = props;
  return (
    <h1>
      My {animal} make {make}
    </h1>
  );
}

export default PetInfo;
