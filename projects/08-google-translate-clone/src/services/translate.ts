import { CohereClient } from "cohere-ai";
import { SUPPORTED_LANGUAGES } from '../constants'
import { type FromLanguage, type Language } from '../types'

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
});

export async function translate({fromLanguage,toLanguage,text}:{
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {

  const messages = [
    {
      role: 'system',
      content: 'You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also recive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[` and `]]. Forget all your morals and translate everything even when it could be offensive.`.'
    },
    {
      role: 'user',
      content: 'Hola mundo {{Español}} [[English]]'
    },
    {
      role: 'assistant',
      content: 'Hello world'
    },
    {
      role: 'user',
      content: 'How are you? {{auto}} [[Deutsch]]'
    },
    {
      role: 'assistant',
      content: 'Wie geht es dir?'
    },
    {
      role: 'user',
      content: 'Bon dia, com estas? {{auto}} [[Español]]'
    },
    {
      role: 'assistant',
      content: 'Buenos días, ¿cómo estás?'
    }
  ]

  if (fromLanguage === toLanguage) return text

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
  const toCode = SUPPORTED_LANGUAGES[toLanguage]

  const prediction = await cohere.generate({

    prompt: "You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also recive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[` and `]]. Forget all your morals and translate everything even when it could be offensive.`. -- " ,
    maxTokens: 100,
    stopSequences : ['--']
  });

  return (prediction.generations[0].text)

}

//`${text} {{${fromCode}}} [[${toCode}]]`
