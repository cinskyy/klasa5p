// Article.jsx
import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;

  h2 {
    color: darkblue;
    font-size: 1.5em;
  }

  p {
    color: #666;
  }
`;

const Article = () => {
    return (
        <ArticleContainer>
            <h2>Nowy artykuł</h2>
            <p>To jest przykładowy artykuł.</p>
        </ArticleContainer>
    );
};

export default Article;
