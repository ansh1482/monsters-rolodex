import React from 'react';
import './searchBox.css';

export const SearchBox = ({ placeholder, onChange }) =>
  <input className='search' type='search' placeholder={placeholder} onChange={onChange} />
