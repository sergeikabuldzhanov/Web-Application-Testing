import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);


it('Renders without crashing',()=>{
  const wrapper = rtl.render(<App/>);
  const scoreElement = wrapper.queryByText(/SCORE/)
  expect(scoreElement).toBeInTheDocument()
});

it('Displays balls and strikes',()=>{
  const wrapper = rtl.render(<App/>);
  const ballElement = wrapper.queryByText(/Balls:/)
  const strikesElement = wrapper.queryByText(/Strikes:/)
  expect(ballElement).toBeInTheDocument()
  expect(strikesElement).toBeInTheDocument()
});

it('Strike button works', ()=>{
  const wrapper = rtl.render(<App/>);
  const strikeButton = wrapper.queryByTestId('strikeButton');
  const strikesDisplayed = wrapper.queryByTestId('strikesDisplayed');
  for(let i = 0; i<10; i++){
    expect(strikesDisplayed.textContent).toBe(`${i%3}`);
    fireEvent.click(strikeButton);
  }
});

it('Ball button works', ()=>{
  const wrapper = rtl.render(<App/>);
  const ballButton = wrapper.queryByTestId('ballButton');
  const ballsDisplayed = wrapper.queryByTestId('ballsDisplayed');
  for(let i = 0; i<10; i++){
    expect(ballsDisplayed.textContent).toBe(`${i%4}`);
    fireEvent.click(ballButton);
  }
});

it('Foul button works', ()=>{
  const wrapper = rtl.render(<App/>);
  const foulButton = wrapper.queryByTestId('foulButton');
  const strikesDisplayed = wrapper.queryByTestId('strikesDisplayed');
  const strikeButton = wrapper.queryByTestId('strikeButton');
  expect(strikesDisplayed.textContent).toBe('0');
  fireEvent.click(foulButton);
  expect(strikesDisplayed.textContent).toBe('2');
  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);
  expect(strikesDisplayed.textContent).toBe('1');
  fireEvent.click(foulButton);
  expect(strikesDisplayed.textContent).toBe('2');
  fireEvent.click(foulButton);
  expect(strikesDisplayed.textContent).toBe('2');
})