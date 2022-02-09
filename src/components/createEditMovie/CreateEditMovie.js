import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createMovieAction,
  editMovieAction,
} from "../../redux/actions/MovieAction";
import {
  Button,
  ContainerInputs,
  CreateEditMovieContainer,
  CreateMSG,
  FormMovieData,
  InputText,
  UploadImage,
} from "./createEditMovieStyle";
import Spinner from "../Spinner";
import { useSelector } from "react-redux";

const CreateEditMovie = ({ create, movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createLoading, editLoading } = useSelector((state) => state.movie);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorYear, setErrorYear] = useState(null);
  const [createMSG, setCreateMSG] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (title.length === 0) return setErrorTitle("Must have a title");
    if (year.length === 0) return setErrorYear("Must have a year");
    if (create) {
      dispatch(createMovieAction(title, year));
      setCreateMSG(`Movie ${title} was created`);
    } else {
      dispatch(editMovieAction(title, year, movie.id));
      navigate("/");
    }
    setYear("");
    setTitle("");
  };
  const handleCancel = () => {
    navigate("/");
  };

  useEffect(() => {
    if (create) return;
    if (movie && Object.keys(movie).length > 0) {
      setTitle(movie.attributes.name);
      setYear(movie.attributes.publicationYear);
      setCreateMSG(null);
    }
  }, [movie]);

  useEffect(() => {
    if (errorTitle || errorYear || createMSG) {
      setTimeout(() => {
        setErrorTitle(null);
        setErrorYear(null);
        setCreateMSG(null);
      }, 3000);
    }
  }, [errorTitle, errorYear, createMSG]);

  return (
    <CreateEditMovieContainer height={67}>
      <UploadImage>
        <i className="fas fa-download"></i>
        <span className="body-text-small">Drop an image here</span>
      </UploadImage>

      <FormMovieData onSubmit={handlesubmit}>
        <ContainerInputs>
          <InputText
            className="body-text-small"
            size={44}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>{errorTitle}</span>
          <InputText
            className="body-text-small"
            size={25}
            type="number"
            placeholder="Publishing year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <span>{errorYear}</span>
        </ContainerInputs>
        <div>
          <Button
            onClick={handleCancel}
            type="button"
            btnColor={false}
            className="body-text-regular"
          >
            Cancel
          </Button>
          <Button type="submit" btnColor={true} className="body-text-regular">
            {create ? "Submit" : "Update"}
          </Button>
        </div>
        {createMSG && <CreateMSG>{createMSG}</CreateMSG>}

        {(createLoading || editLoading )&&(
          <div style={{ paddingRight: "160px", marginTop: "60px" }}>
            <Spinner />
          </div>
        )}
      </FormMovieData>
    </CreateEditMovieContainer>
  );
};

export default CreateEditMovie;
