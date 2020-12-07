import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import First_Options from "../components/Options/First_Options";
import Second_Options from "../components/Options/Second_Options";

const config = {
  botName: "Professor",
  initialMessages: [
    createChatBotMessage(`שלום! על מה תרצה ללמוד היום? `, {
      widget: "first options",
    }),
  ],
  widgets: [
    {
      widgetName: "first options",
      widgetFunc: (props) => <First_Options {...props} />,
    },
    {
      widgetName: "Second options",
      widgetFunc: (props) => <Second_Options {...props}/>
    }
  ],
};

export default config;