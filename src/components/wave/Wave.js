import {WaveStyle} from './waveStyle'

const Wave = () => {
  return (
    <>
      <WaveStyle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E5E5E5"
          fill-opacity="0.13"
          d="M0,288L80,261.3C160,235,320,181,480,186.7C640,192,800,256,960,277.3C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </WaveStyle>
      <WaveStyle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#20DF7F"
          fill-opacity="0.13"
          d="M0,256L80,256C160,256,320,256,480,261.3C640,267,800,277,960,266.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </WaveStyle>
    </>
  );
};

export default Wave;
