import React from 'react';
import './index.css';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Footer',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
export const liText = () => {
  return (
    <footer>
      <div class="footer-tab-container">
        <ul class="footer-tab">
          <li>공지사항</li>
          <li>게시판</li>
          <li>어쩌구</li>
          <li>저쩌구</li>
        </ul>
      </div>
    </footer>
  )
}

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
