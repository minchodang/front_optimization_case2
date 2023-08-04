import { useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageModal from './components/ImageModal';
import InfoTable from './components/InfoTable';
import SurveyChart from './components/SurveyChart';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      {showModal ? (
        <ImageModal
          closeModal={() => {
            setShowModal(false);
          }}
        />
      ) : null}
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
