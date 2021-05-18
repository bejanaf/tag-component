import styled from 'styled-components';
import { useState } from 'react';

export default function Tags({ tags, onUpdateTags }) {
  const [tag, setTag] = useState('');

  function handleChange(event) {
    setTag(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(tag);
      setTag('');
    }
  }

  return (
    <Tag>
      <label htmlFor="tag">Player Skills</label>
      <TagCloud>
        {tags.map((tag, index) => (
          <span key={index + tag}>
            {tag}
            <button>x</button>
          </span>
        ))}
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </TagCloud>
    </Tag>
  );
}

const Tag = styled.section`
  display: grid;
  gap: 0.4rem;
  font-family: sans-serif;

  input {
    border: none;
    outline: none;
    padding: 0.5rem;
    width: 100%;
  }
`;

const TagCloud = styled.div`
  display: flex;
  border: 2px solid black;

  span {
    display: flex;
    background: deepskyblue;
    color: ivory;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin: 0.1rem;
  }
`;
