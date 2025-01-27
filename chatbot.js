(function() {

  // Configuration object for proactive messages
  const proactiveMessagesList = {
    '/': {
      firstTimeout: 0,
      firstMessage: 'W czym mogę Ci pomóc?',
      secondMessage: null,
      timeout: 0,
    },
    '/nieruchomosci': {
      firstTimeout: 0,
      firstMessage: 'Potrzebujesz wsparcia w poszukiwaniach? 🏢',
      secondMessage: 'Porozmawiaj z agentem AI',
      timeout: 5000,
    },
    '/uslugi': {
      firstTimeout: 0,
      firstMessage: 'Potrzebujesz wsparcia?',
      secondMessage: 'Porozmawiajmy!',
      timeout: 5000,
    },
    '/o-nas': {
      firstTimeout: 0,
      firstMessage: 'Czy potrzebujesz dodatkowych informacji?',
      secondMessage: 'Porozmawiajmy 👀',
      timeout: 5000,
    },
    '/kalkulator-m2': {
      firstTimeout: 0,
      firstMessage: 'Potrzebujesz optymalizacji powierzchni? 📐',
      secondMessage: 'Albo szukasz biura na wynajem?',
      timeout: 5000,
    },
    '/blog': {
      firstTimeout: 0,
      firstMessage: 'Czy możemy Ci jakoś pomóc?',
      secondMessage: 'Porozmawiaj z naszym doradcą AI 💬',
      timeout: 5000,
    },
    '/kontakt': {
      firstTimeout: 5000,
      firstMessage: 'Potrzebujesz pomocy?',
      secondMessage: 'Zostaw swoje namiary, oddzwonimy! ☎️',
      timeout: 8000,
    },
  };

const proactiveMessagesListEn = {
  '/': {
    firstTimeout: 0,
    firstMessage: 'How can I assist you?',
    secondMessage: null,
    timeout: 0,
  },
  '/nieruchomosci': {
    firstTimeout: 0,
    firstMessage: 'Need help with your search? 🏢',
    secondMessage: 'Talk to the AI agent',
    timeout: 5000,
  },
  '/uslugi': {
    firstTimeout: 0,
    firstMessage: 'Do you need support?',
    secondMessage: "Let's talk!",
    timeout: 5000,
  },
  '/o-nas': {
    firstTimeout: 0,
    firstMessage: 'Do you need additional information?',
    secondMessage: "Let's chat 👀",
    timeout: 5000,
  },
  '/kalkulator-m2': {
    firstTimeout: 0,
    firstMessage: 'Looking to optimize your space? 📐',
    secondMessage: 'Or searching for an office to rent?',
    timeout: 5000,
  },
  '/blog': {
    firstTimeout: 0,
    firstMessage: 'Can we help you with something?',
    secondMessage: 'Talk to our AI advisor 💬',
    timeout: 5000,
  },
  '/kontakt': {
    firstTimeout: 5000,
    firstMessage: 'Do you need help?',
    secondMessage: 'Leave your contact, and we’ll call you back! ☎️',
    timeout: 8000,
  },
};

const addMessagesToConversationHistory = (history) => {
  const { pathname } = window.location;
  const isEnPath = pathname.includes('/en/');
  const proactiveMessages = isEnPath ? proactiveMessagesListEn : proactiveMessagesList;

  // Special handling for exact match with home path ("/")
  const matchedPath =
    pathname === '/'
      ? '/'
      : Object.keys(proactiveMessages).find((key) => key !== '/' && pathname.includes(key));

  if (!matchedPath) return; // No matching path found

  const config = proactiveMessages[matchedPath];

  const pushMessage = (message) => {
    if (message) history.push({ role: 'assistant', content: message });
  };

  pushMessage(config.firstMessage);
  pushMessage(config.secondMessage);
};

    let conversationHistory = [];

    addMessagesToConversationHistory(conversationHistory);

    // Add Tailwind CSS for styling
    document.head.insertAdjacentHTML(
      'beforeend',
      '<link href="https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap" rel="stylesheet">'
    );
  
    // Inject custom CSS
    const style = document.createElement('style');
    style.innerHTML = `
    
    #chat-widget-container {
    #chat-widget-container *,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.bottom-20{bottom:5rem}.right-0{right:0}.z-\[100\]{z-index:100}.m-0{margin:0}.m-2{margin:.5rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-6{margin-bottom:1.5rem}.flex{display:flex}.hidden{display:none}.h-12{height:3rem}.h-16{height:4rem}.h-6{height:1.5rem}.w-12{width:3rem}.w-16{width:4rem}.w-3\/4{width:75%}.w-6{width:1.5rem}.w-96{width:24rem}.w-fit{width:-moz-fit-content;width:fit-content}.max-w-\[70\%\]{max-width:70%}.max-w-fit{max-width:-moz-fit-content;max-width:fit-content}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem*var(--tw-space-x-reverse));margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)))}.self-end{align-self:flex-end}.justify-self-end{justify-self:end}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border{border-width:1px}.border-none{border-style:none}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-2{padding:.5rem}.p-4{padding:1rem}.p-8{padding:2rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-center{text-align:center}.text-right{text-align:right}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-semibold{font-weight:600}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.disabled\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\:opacity-50:disabled{opacity:.5}

      position: fixed;
      bottom: 60px;
      right: 20px;
      display: flex;
      flex-direction: column;
      font-family: 'Tinos', serif; /* Apply Tinos font */
      align-items: flex-end;

          #chat-popup {
      height: 70vh;
      max-height: 70vh;
      transition: all 0.3s;
      overflow: hidden;
      font-family: 'Tinos', serif; /* Apply Tinos font */
    }
    @media (max-width: 768px) {
        #chat-widget-container {
        bottom: 20px;
      }
      #chat-popup {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0;
      }
    }
      
    }
    `;
    document.head.appendChild(style);
  
    // Create the chat widget container
    const chatWidgetContainer = document.createElement('div');
    chatWidgetContainer.id = 'chat-widget-container';
    chatWidgetContainer.className = 'flex flex-column justify-end items-end absolute z-[100]';
    chatWidgetContainer.style.zIndex = '1000';
    document.body.appendChild(chatWidgetContainer);
  
    // Inject the HTML for the widget
    chatWidgetContainer.innerHTML = `
      <div id="proactive-messages-container">
      </div>
      <div style="background-color: #100F2D;" id="chat-bubble" class="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer text-3xl">
        <img class="h-12 w-12" src="data:image/svg+xml,%3csvg%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M18.0000533,7%20C24.6266329,7%2030,11.4789312%2030,16.9976931%20C30,22.5163617%2024.6266329,26.9953062%2018.0000533,26.9953062%20C17.123351,26.9971724%2016.2483812,26.9169271%2015.386606,26.7553699%20C14.0404188,27.7431078%2012.5315125,28.4873102%2010.9284053,28.9541197%20C10.4583473,29.0903502%209.95341047,28.916663%209.66660965,28.5199682%20C9.37982216,28.1234068%209.37297168,27.5894152%209.64952342,27.1855224%20C10.1505552,26.5172998%2010.5515886,25.7796289%2010.840002,24.9957036%20C7.9365286,23.3624038%206.10015838,20.3278759%206,16.9976931%20C6,11.4789179%2011.3733271,7%2018.0000533,7%20Z%20M18.0000533,18.0020932%20L14.0000889,18.0020932%20L13.8644511,18.0112196%20C13.3765531,18.0774186%2013.0005042,18.4957012%2013.0005042,19.0018279%20C13.0005042,19.5539661%2013.4480335,20.0015625%2014.0000889,20.0015625%20L18.0000533,20.0015625%20L18.135691,19.9924361%20C18.623589,19.9262371%2018.9996379,19.5079545%2018.9996379,19.0018279%20C18.9996379,18.4496896%2018.5521087,18.0020932%2018.0000533,18.0020932%20Z%20M22.0001244,14.001515%20L14.0000889,14.001515%20L13.8644511,14.0106414%20C13.3765531,14.0768404%2013.0005042,14.495123%2013.0005042,15.0012497%20C13.0005042,15.5533879%2013.4480335,16.0009843%2014.0000889,16.0009843%20L22.0001244,16.0009843%20L22.1357621,15.9918579%20C22.6236601,15.9256589%2022.999709,15.5073764%2022.999709,15.0012497%20C22.999709,14.4491115%2022.5521797,14.001515%2022.0001244,14.001515%20Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/g%3e%3c/svg%3e" />
      </div>
      <div id="chat-popup" class="hidden absolute bottom-20 right-0 w-96 bg-white rounded-md shadow-md flex flex-col transition-all text-sm">
        <div  style="background-color: #100F2D;" id="chat-header" class="flex justify-between items-center p-2 text-sm text-white rounded-t-lg">
        <div class="flex gap-x-2">
         <img class="w-6 w-max-6 h-6 h-max-6" src="https://cm4-production-assets.s3.amazonaws.com/1729313423218-apple-touch-icon.png" />  
        <h3 class="m-0 text-base">Wirtualny Asystent</h3>
        </div>
          <button id="close-popup" class="bg-transparent border-none text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div id="chat-messages" class="flex-1 p-4 overflow-y-auto">
        <div class="flex flex-col justify-center items-center mb-6 p-8">
            <img class="w-16 h-16" src="https://cm4-production-assets.s3.amazonaws.com/1731862489163-unnamed-1.png" />
            <h1 class="m-2 text-lg font-semibold">Wirtualny Asystent</h1>
            <p class="text-gray-600 text-center">Jestem wirtualnym asystentem z BNM, dostępny dla Ciebie 24/7.</p>
        </div>
        </div>
        <div id="chat-input-container" class="p-4">
          <div class="flex space-x-4 items-center">
            <textarea type="text" rows="1" id="chat-input" class="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none w-3/4" placeholder="Message..."></textarea>
            <button id="chat-submit" class="bg-gray-800 text-white rounded-md px-4 py-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">Send</button>
          </div>
        </div>
      </div>
    `;
  
    // Add event listeners
    const chatInput = document.getElementById('chat-input');
    const chatSubmit = document.getElementById('chat-submit');
    const chatMessages = document.getElementById('chat-messages');
    const chatBubble = document.getElementById('chat-bubble');
    const chatPopup = document.getElementById('chat-popup');
    const closePopup = document.getElementById('close-popup');
  
    // Display initial assistant message
    conversationHistory.forEach(({content}) => {
      displayReplyMessage(content);
    })

    chatSubmit.addEventListener('click', function() {
      const message = chatInput.value.trim();
      if (!message) return;
  
      chatInput.value = '';
      displayUserMessage(message);
      getChatGPTReply(message);
    });
  
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        // Allow Shift+Enter to add a new line
        if (event.shiftKey) return;
        // Prevent new line for Enter without Shift and submit the form
        event.preventDefault();
        chatSubmit.click();
      }
    });
  
    chatBubble.addEventListener('click', function() {
      removeProactiveMessages();
      togglePopup();
      initializeChatWidget();
    });
  
    closePopup.addEventListener('click', function() {
      togglePopup();
    });
  
    function togglePopup() {
      chatPopup.classList.toggle('hidden');
      
      if (!chatPopup.classList.contains('hidden')) {
        chatInput.focus();
      }
    }
  
    let threadId = null;

    window.addEventListener('beforeunload', () => {
      try {
        if(!!threadId && threadId !== undefined) sendEmailWithChatHistory(threadId);
      } catch (error) {
        console.error('Error sending chat history:', error);
      }
  });
  
    function displayUserMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.className = 'flex justify-end mb-3';
      messageElement.innerHTML = `
        <div class="bg-gray-800 text-white rounded-lg py-2 px-4 max-w-[70%]">
          ${formatMessageWithNewLines(message)}
        </div>
      `;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    function displayReplyMessage(message) {
      const replyElement = document.createElement('div');
      replyElement.className = 'flex mb-3';
      replyElement.innerHTML = `
        <div class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[70%]">
          ${parseMarkdownToHtml(message)}
        </div>
      `;
      chatMessages.appendChild(replyElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    function displayLoader() {
      const loaderElement = document.createElement('div');
      loaderElement.id = 'loading-indicator';
      loaderElement.className = 'flex mb-3';
      loaderElement.innerHTML = `
        <div class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[70%] flex items-center">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </div>
      `;
      chatMessages.appendChild(loaderElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Add animation
      const style = document.createElement('style');
      style.innerHTML = `
        #loading-indicator .dot {
          animation: blink 1s infinite;
        }
        #loading-indicator .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        #loading-indicator .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Function to remove the loader
    function removeLoader() {
      const loaderElement = document.getElementById('loading-indicator');
      if (loaderElement) loaderElement.remove();
    }

    async function getChatGPTReply(userMessage) {
      // Display the loader
      displayLoader();
      // Disable the send button
      disableButton();

      try {
        // Existing code to send the message
        const response = await sendMessage(userMessage, threadId);
        conversationHistory.push({ role: 'user', content: userMessage });
        conversationHistory.push({ role: 'assistant', content: response });

        // Remove the loader
        removeLoader();

        // Display the assistant's response
        const cleanedResponse = removeBracketedText(response);
        displayReplyMessage(cleanedResponse);
        enableButton();
      } catch (error) {
        removeLoader();
        console.error('Error fetching the response:', error);
      }
    }
  
    const initializeChatWidget = async () => {
      if(!!threadId) return;
    
    //   assistant = await getAssistant('asst_bQIay4lQB3U9l265MevyHJCT');
      const response = await requestInitialization();
      threadId = await response;
    }

  //http://localhost:3000
  //https://reframe-ai.uc.r.appspot.com
  const ENDPOINT = 'https://reframe-ai.uc.r.appspot.com';


  const requestInitialization = async () => {
    const response = await fetch(`${ENDPOINT}/api/initialize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {threadId} = await response.json();
    return threadId;
  }

  const sendMessage = async (userMessage, threadId) => {
    const response = await fetch(`${ENDPOINT}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userMessage,
        threadId,
        assistantId: 'asst_bQIay4lQB3U9l265MevyHJCT',
      }),
    });
    const data = await response.json();
    return data;
  }

  const sendEmailWithChatHistory = (id) => {
    const url = `${ENDPOINT}/api/send-history`;
    const payload = new Blob([JSON.stringify({ threadId: id })], {type: 'application/json'});
    navigator.sendBeacon(url, payload);
  }

  function removeBracketedText(text) {
    // Regex to match any text within brackets, including the brackets
    const bracketPattern = /【.*?】/g;
    // Replace all matches with an empty string
    return text.replace(bracketPattern, '');
}

// Get the current page path
const { pathname } = window.location;

// Determine if the current path is in English
const isEnPath = pathname.includes('/en');

// Select the appropriate proactive messages list
const proactiveMessages = isEnPath ? proactiveMessagesListEn : proactiveMessagesList;

// Special handling for the home path to avoid matching everything
let matchedPath = pathname === '/' 
  ? '/' 
  : Object.keys(proactiveMessages).find((key) => key !== '/' && pathname.includes(key));

if (matchedPath) {
  const config = proactiveMessages[matchedPath];

  // Display the first message after the specified timeout
  setTimeout(() => {
    addMessageToWidget(config.firstMessage);

    // Display the second message if configured
    if (config.secondMessage) {
      setTimeout(() => {
        addMessageToWidget(config.secondMessage);
      }, config.timeout);
    }
  }, config.firstTimeout);
}

const addMessageToWidget = (message) => {
  const widget = document.querySelector('#proactive-messages-container'); // Update with actual widget selector
  if (widget && message) {
    const messageElement = document.createElement('div');
    messageElement.className = `
      bg-white 
      text-gray-700 
      shadow-md 
      rounded-lg 
      p-2
      text-sm
      mb-2 
      border 
      border-gray-200
      max-w-fit
      w-fit
      max-w-max 
      flex 
      text-right
      self-end
      justify-self-end
    `;
    messageElement.textContent = message;
    widget.appendChild(messageElement, widget.firstChild); // Add message to the top of the widget
  }
};

const removeProactiveMessages = () => {
  const proactiveContainer = document.querySelector('#proactive-messages-container');
  if (proactiveContainer) proactiveContainer.remove();
}


const disableButton = () => {
  const button = document.getElementById('chat-submit');

  button.style.opacity = '0.5'; // Makes the button appear disabled
  button.disabled = true; // Disables functionality
}

const enableButton = () => {
  const button = document.getElementById('chat-submit');

  button.style.opacity = '1'; // Restores opacity
  button.disabled = false; // Enables functionality
}

function parseMarkdownToHtml(markdown) {
  // Replace **text** with <b>text</b> for bold
  markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

  // Replace *text* or _text_ with <i>text</i> for italics
  markdown = markdown.replace(/\*(.*?)\*/g, '<i>$1</i>');
  markdown = markdown.replace(/_(.*?)_/g, '<i>$1</i>');

  // Replace - Item or * Item with <ul><li>Item</li></ul> for lists
  markdown = markdown.replace(/(?:^|\n)- (.*?)(?:\n|$)/g, '<ul><li>$1</li></ul>');
  markdown = markdown.replace(/(?:^|\n)\* (.*?)(?:\n|$)/g, '<ul><li>$1</li></ul>');

  // Replace \n\n with <br> for line breaks
  markdown = markdown.replace(/\n/g, '<br>');

  return markdown;
}

function formatMessageWithNewLines(message) {
  return message.replace(/\n/g, '<br>');
}
  })();