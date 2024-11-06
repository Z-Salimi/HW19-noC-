import React from 'react';
import { RecoilRoot, atom, useRecoilState } from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <input className='border-2' type="text" value={text} onChange={handleChange} />
  );
};

const AppR = () => {
  return (
    <RecoilRoot>
      <h1>Recoil JS Example</h1>
      <TextInput />
    </RecoilRoot>
  );
};

export default AppR;