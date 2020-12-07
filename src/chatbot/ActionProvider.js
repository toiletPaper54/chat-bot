class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("שלום חבר.");
      this.addMessageToState(message);
    };
  
    handleYasha = () => {
      const message = this.createChatBotMessage(
        "מה תרצו לדעת על הרש\"צ שלנו?",
        {
          widget: "Second options",
        }
      );
  
      this.addMessageToState(message);
    };

    handleThinkers = () => {
      const message = this.createChatBotMessage("יש אנשים שחושבים שיאשה מכוער. אבל חברי הצוות מעולם לא אמרו זאת. (חוץ מאופיר)")
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;