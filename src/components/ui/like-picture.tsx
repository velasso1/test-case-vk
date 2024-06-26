import { FC, useState } from "react";
import StarImage from "../../pictures/star.svg";
// import { useAppSelector } from "../../store";

interface IlikeProps {
  id: number | null;
}

const Like: FC<IlikeProps> = () => {
  // const dispatch = useAppDispatch();
  // const likedMovies = useAppSelector((state) => state.movies.likedMovies);
  const [color, setColor] = useState("0");

  // useEffect(() => {
  //   setColor(color === "0" ? "350" : "0");
  // }, [color, likedMovies]);

  return (
    <>
      <img
        onClick={(e) => {
          e.stopPropagation();
          // dispatch(likePicture(id));
          setColor(color === "0" ? "350" : "0");
        }}
        className="card__like"
        src={StarImage}
        alt="like"
        style={{ fill: `saturate(${color}%)` }}
      />
    </>
  );
};

export default Like;
