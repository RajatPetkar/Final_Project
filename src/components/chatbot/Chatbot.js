import React from 'react'
import ChatBot from 'react-simple-chatbot';
import steps from './steps'
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {
    const theme = {
        background: '#C9FF8F',
        headerBgColor: '#197B22',
        headerFontSize: '20px',
        botBubbleColor: '#0F3789',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FF5733',
        userFontColor: 'white',
    };
    
    const config = {
        botAvatar: "user.png",
        floating: true,
    };

  return (
    <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle=""
                    steps={steps}
                    speechSynthesis={{ enable: true, lang: 'en', voice: null }}
                    recognitionEnable={true}
                    {...config}
                />
    </ThemeProvider>
  )
}

export default Chatbot