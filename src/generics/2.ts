type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

type TopType = Pick<AllType, 'name'| 'color'>;
type BottomType = Pick<AllType, 'position'|'weight'>;

function compare (top: TopType, bottom: BottomType):TopType | BottomType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}


const topObj = {
    name: "top",
    position: 1,
    color: "blue",
    weight: 100,
};

const bottomObj = {
    name: "bottom",
    position: 2,
    color: "yellow",
    weight: 200,
};

console.log(compare(topObj, bottomObj));



