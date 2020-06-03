import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';

const Page = styled.View`
  flex: 1;
  margin-top: 52px;
  justify-content: center;
  align-items: center;
`;
const Box = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
const BoxBody = styled.View`
  width: 90%;
  height: 200px;
  background-color: #FFF;
  border-radius: 10px;
`;

const Button = styled.Button``;

export default function App() {
  const [ modalVisible, setModalVisible ] = useState(false);  

  return (
    <Page>
      <Button title="Mostral Modal" onPress={() => setModalVisible(true)}/>
      <Modal visible={modalVisible} animationType="slide" transparent={false} onRequestClose={() => setModalVisible(false)}>
        <Box>
          <BoxBody>
            <Button title="Fechar Modal" onPress={() => setModalVisible(false)}/>
          </BoxBody>
        </Box>
      </Modal>
    </Page>
  );
}