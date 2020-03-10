import React, { useEffect } from 'react';
import styled from 'styled-components';

const LandbotContainer = styled.div`
  width: 100%;
  height: 100%;
  background: green;
`;

class ChatBotLayout extends React.Component {
  componentDidMount() {
    // please, replace this line with 
    // this.landbot = new LandbotFrameWidget({
      
    // like this...
    this.landbot = new window.LandbotFrameWidget({
      index: 'https://yexir.com/u/H-4380-9TQP18V1UE815U93/index.html',
      container: '.landbot'
    });
    
  }

  componentWillUnmount() {
    this.landbot.destroy();
  }
  render() {
    return <LandbotContainer className="landbot" />;
  }
}

export default ChatBotLayout;
