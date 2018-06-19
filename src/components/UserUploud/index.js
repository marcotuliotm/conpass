import React from 'react';
import ReactFileReader from 'react-file-reader';
import { Container, ButtonImage, Image } from './Styles';

function UserUploud(props) {
  const { handleFiles, src } = props;
  return (
    <div className="row justify-content-center">
      <ReactFileReader base64 handleFiles={handleFiles}>
        {src ? <Image src={src} alt="preview" /> :
          (<ButtonImage >
            <Container>
              <span>Click to uploud your</span>
              <span>profile image</span>
            </Container>
          </ButtonImage>)}
      </ReactFileReader>
    </div>
  );
}

export default UserUploud;
