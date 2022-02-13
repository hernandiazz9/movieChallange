import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
import Error from "../errorComponent/Error";
import Spinner from "../Spinner";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "JPEG", "PNG", "WEBP"];

const CreateEditMovie = ({ create, movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createLoading, editLoading } = useSelector((state) => state.movie);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorYear, setErrorYear] = useState(null);
  const [errorIMG, setErrorIMG] = useState(null);
  const [createMSG, setCreateMSG] = useState(null);
  const [file, setFile] = useState(null);
  const [dropMessage, setDropMessage] = useState("Drop an image here");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (title.length === 0) return setErrorTitle("Must have a title");
    if (year.length === 0) return setErrorYear("Must have a year");
    if (!file) return setErrorIMG("Must have an image");
    if (create) {
      dispatch(createMovieAction(title, year, file));
      setCreateMSG(`Movie ${title} was created`);

    } else {
      dispatch(editMovieAction(title, year, movie.id, file));
      navigate("/");
    }
    setYear("");
    setTitle("");
    setFile(null)
  };
  const handleCancel = () => {
    navigate("/");
  };

  useEffect(() => {
    if (create) return;
    if (movie && Object.keys(movie).length > 0) {
      setTitle(movie.attributes.name);
      setYear(movie.attributes.publicationYear);
      setFile(movie.poster);
      setCreateMSG(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  useEffect(() => {
    if (errorTitle || errorYear || createMSG) {
      setTimeout(() => {
        setErrorTitle(null);
        setErrorYear(null);
        setErrorIMG(null);
        if(createMSG){
          setCreateMSG(null);
          navigate("/");

        }

      }, 3000);
    }
  }, [errorTitle, errorYear, createMSG]);

  const handleDragStart = (file) => {
    setDropMessage("Files is here");
    setFile(file);
  };

  return (
    <CreateEditMovieContainer height={67}>
      <UploadImage>
        <FileUploader
          classes="file-uploader"
          handleChange={handleDragStart}
          name="file"
          types={fileTypes}
        />
        <div>
          <i className="fas fa-download"></i>
          <span className="body-text-small">{dropMessage}</span>
          {!create && movie && (
            <img
              style={{ width: "150px", heigth: "200px" }}
              src={movie.poster}
              alt={movie.title}
            />
          )}
        </div>
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
          {errorTitle && <Error msg={errorTitle} />}
          <InputText
            className="body-text-small"
            size={25}
            type="number"
            placeholder="Publishing year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          {errorYear && <Error msg={errorYear} />}
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
        {errorIMG && (
          <div>
            <Error msg={errorIMG} />
          </div>
        )}
        {createMSG && <CreateMSG>{createMSG}</CreateMSG>}

        {(createLoading || editLoading) && (
          <div style={{ paddingRight: "160px", marginTop: "60px" }}>
            <Spinner />
          </div>
        )}
      </FormMovieData>
    </CreateEditMovieContainer>
  );
};

export default CreateEditMovie;
