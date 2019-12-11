import typography from '../typography';

export default `
  @import url('https://fonts.googleapis.com/css?family=Domine|Open+Sans&display=swap');
  ${typography.createStyles()}
  body {
    margin: 30px 15px;
  }
  img {
    margin-bottom: 0;
  }
  .video {
    position: relative; left: 0; top: 0;
  }
  .video-fake-background {
    background: darkslateblue;
    padding: 2rem;
    height: 402px;
    margin-bottom: 1.16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .video-fake-background h3 {
    line-height: 1.5;
  }
  .video-background {
    position: relative;
		top: 0;
		left: 0;
  }
  .video-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    height: 2rem;
  }
`;
