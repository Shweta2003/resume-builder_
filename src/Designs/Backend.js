export const getAnswer = async (prompt, type) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",
      content: `Write the following text in a concise, professional, and impactful manner. Ensure the language is refined and the response is in 3 sentences:"${prompt}"`,
    },
  ];

  const body = {
    model: "gpt-3.5-turbo",
    messages,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  let messagesFromAssistant = data.choices[0].message.content.split("\n");
  const assistantResponses = messagesFromAssistant.filter(
    (msg) => msg.trim() !== ""
  );

  return {
    evaluation: assistantResponses[0]
      ? assistantResponses[0].replace("Assistant: ", "")
      : null,
  };
};

export const getAnswerForTailered = async (
  prompt,
  already,
  pos
) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",

      // content: `Give the response in professional language. I want to apply for the ${prompt} position. Give brief and consice response, to modify the ${section} section in my resume. The destails provided are ${already}. Help me enhance it according to the job description. Give me brief description about this JD in not more than ${maxTokens}.`,

      content: `Based on the job description, tailor the user's response. Adjust the user's experiences, and skills to align closely with the requirements and preferences stated in the job description. Ensure that the tailored response is coherent, professionally formatted, and emphasizes the most relevant aspects of the user's background in relation to the job in three sentences. Job description given : "${prompt}". User's previous job : "${pos}". User's response is : "${already}"`
    },
  ];

  const body = {
    model: "gpt-3.5-turbo",
    messages,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const messagesFromAssistant = data.choices[0].message.content.split("\n");
  let words = messagesFromAssistant[0].split(". ");
    messagesFromAssistant[0] = words.join(".\n");
  const assistantResponses = messagesFromAssistant.filter(
    (msg) => msg.trim() !== ""
  );

  return {
    evaluation: assistantResponses[0]
      ? assistantResponses[0].replace("Assistant: ", "")
      : null,
  };
};



export const getAnswerForExperience = async (prompt) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",
      content: `Given the user's responses, please create 3 professional resume sentences. Each sentence should begin with a strong action verb, detail a specific task, and highlight a quantifiable impact. The user's key tasks and their impacts are:
      Ensure that each sentence succinctly encapsulates the task's essence, the action taken, and the measurable outcome or benefit. Emphasize clarity and brevity, while making sure the points are impactful and results-oriented. User's response is : "${prompt}". Donot number the sentences.`,
    },
  ];

  const body = {
    model: "gpt-3.5-turbo",
    messages,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const messagesFromAssistant = data.choices[0].message.content.split("\n");
  let assistantResponses = messagesFromAssistant.filter(
    (msg) => msg.trim() !== ""
  );

    let i = 0;
    for(i = 0 ; i < assistantResponses.length ; i ++){
      if(assistantResponses[i][0] === "-"){
        assistantResponses[i] = assistantResponses[i].slice(2,);
      }
    }

  return {
    evaluation: assistantResponses.join("\n")
      ? assistantResponses.join("\n").replace("Assistant: ", "")
      : null,
  };
};
