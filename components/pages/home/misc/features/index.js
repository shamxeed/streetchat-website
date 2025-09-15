import React from 'react';

import Title from './Title';
import Text from './Text';
import SubTitle from './SubTitle';

import { options } from './helpers';

export default function Features() {
  return (
    <div className='md:max-w-230 p-4 pb-15'>
      <Title title={'Welcome'} />
      <Text>
        Streetchat is a simple, reliable, and fun innovative mobile chatting
        application designed to make it easier to connect with people/friends
        arround you.
      </Text>

      <br />

      <Text>
        Our application was built with simplicity on mind but you can do more,
        from chatting one on one with friends to creating Squads and chat with
        group of people that matter most (Your Squad).
      </Text>

      {options.map(({ title, text }) => (
        <React.Fragment key={title}>
          <SubTitle>{title}</SubTitle>

          <Text>{text}</Text>
        </React.Fragment>
      ))}
    </div>
  );
}
