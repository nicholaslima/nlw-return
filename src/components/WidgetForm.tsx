import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/Bug.svg";
import IdeaImageUrl from "../assets/Idea.svg";
import thoughtImageUrl from "../assets/Thought.svg";
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: { source: bugImageUrl, alt: "imagem de um inseto" },
  },
  IDEA: {
    title: "Ideia",
    image: { source: IdeaImageUrl, alt: "imagem de uma lâmpada" },
  },
  OTHER: {
    title: "Outro",
    image: { source: thoughtImageUrl, alt: "imagem de um Balão de pensamento" },
  },
};

type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                onClick={() => setFeedbackType(key as feedbackType)}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title} </span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Hello world</p>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela
        <a
          className="underline underline-offset-2 ml-1"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
