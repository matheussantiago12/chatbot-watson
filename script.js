window.watsonAssistantChatOptions = {
    integrationID: "1f48462e-e0c7-4b64-9925-e1fec8b32ed5",
    region: "us-south",
    serviceInstanceID: "b559a98b-e507-4125-bf2e-510ee2b88e3d",
    onLoad: function(instance) {
      const customLanguagePack = {
          "input_placeholder": "Escreva algo...",
          "homeScreen_conversationStarterLabel": "Comece agora",
      };

      instance.updateLanguagePack(customLanguagePack);
      instance.render(); 
    }   
};

setTimeout(function(){
  const script = document.createElement('script');
  script.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
  document.head.appendChild(script);
});