export const getAnswer = async (prompt, maxTokens) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",
      content: `Write the following text in a concise, professional, and impactful manner. Ensure the language is refined and the response is ${maxTokens} words long: "${prompt}"`,
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
  maxTokens,
  section
) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",

      // content: `Give the response in professional language. I want to apply for the ${prompt} position. Give brief and consice response, to modify the ${section} section in my resume. The destails provided are ${already}. Help me enhance it according to the job description. Give me brief description about this JD in not more than ${maxTokens}.`,

      content: `Based on the user's resume and the provided job description, create a tailored resume. Adjust the user's experiences, and skills to align closely with the requirements and preferences stated in the job description. Ensure that the tailored resume is coherent, professionally formatted, and emphasizes the most relevant aspects of the user's background in relation to the job in maximum ${maxTokens} number of words. Please modify the ${section} section of resume from ${already} for the position of ${prompt}`
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
  console.log(data);
  const messagesFromAssistant = data.choices[0].message.content.split("\n");
  const assistantResponses = messagesFromAssistant.filter(
    (msg) => msg.trim() !== ""
  );

  return {
    evaluation: assistantResponses[0]
      ? assistantResponses[0].replace("Assistant: ", "")
      : null,
  };
};



export const getAnswerForExperience = async (prompt, maxTokens) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  // console.log(apiKey);
  const messages = [
    {
      role: "system",
      content: `${prompt} Based on the user's responses, please create professional resume bullet points. Each point should begin with a strong action verb, detail a specific task, and highlight a quantifiable impact. The user's key tasks and their impacts are:
      Ensure that each bullet point succinctly encapsulates the task's essence, the action taken, and the measurable outcome or benefit. Emphasize clarity and brevity, while making sure the points are impactful and results-oriented.`,
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
  console.log(data);
  const messagesFromAssistant = data.choices[0].message.content.split("\n");
  const assistantResponses = messagesFromAssistant.filter(
    (msg) => msg.trim() !== ""
  );

  return {
    evaluation: assistantResponses[0]
      ? assistantResponses[0].replace("Assistant: ", "")
      : null,
  };
};
