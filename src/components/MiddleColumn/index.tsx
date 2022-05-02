import React from 'react';

import LoadingFeedPost from '../Shimmer/LoadingFeedPost';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';
import LoadingFeedShare from '../Shimmer/LoadingFeedShare';

const MiddleColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
        <LoadingFeedShare/>
        <LoadingFeedPost/>
        <LoadingFeedPost/>
        <LoadingFeedPost/>
        <LoadingFeedPost/>
        </>
      ):(
        <>
      <FeedShare />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
