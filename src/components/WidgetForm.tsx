export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative text-white rounded-2xl mb-4 flex  flex-col itens-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">deixe seu feedback</span>
      </header>

      <p>Hello world</p>

      <footer className="text-xs text-neutral-400">
        Feito com pela
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
