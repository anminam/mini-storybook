import React from 'react';
import '../App.css';
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
      <div className="footer-small-text-container">
        <ul>
          <li>훈미니</li>
          <li>훈미니</li>
          <li>훈미니</li>
          <li>훈미니</li>
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
