import React from 'react'

export default function Newspaper({ caseData, onClueClick, foundClues }) {
  const { newspaper } = caseData

  const renderTextWithClues = (content) => {
    return content.map((item, idx) => (
      <p key={idx} className="mb-4">
        {item.text}
        {item.clues && item.clues.map((clue, clueIdx) => (
          <span
            key={clueIdx}
            className={`clue-span ${foundClues.includes(clue.id) ? 'found' : ''}`}
            onClick={() => onClueClick(clue)}
          >
            {clue.text}
          </span>
        ))}
      </p>
    ))
  }

  return (
    <main className="newspaper-sheet flex-1 p-6 md:p-10 relative">
      <header className="text-center mb-8 border-b-4 border-double border-neutral-800 pb-4">
        <div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-2 text-xs">
          <span className="uppercase tracking-widest">{newspaper.header.issueNumber}</span>
          <span className="uppercase tracking-widest">{newspaper.header.weather}</span>
          <span className="uppercase tracking-widest">{newspaper.header.date}</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-2 font-serif">
          旧城纪事报
        </h1>
        <div className="text-sm font-bold italic serif tracking-widest">
          THE OLD TOWN CHRONICLE — {newspaper.header.motto}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <article className="md:col-span-8 pr-4 border-r border-neutral-300">
          <h2 className="headline text-4xl mb-4 whitespace-pre-line">
            {newspaper.headline.title}
          </h2>
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6 font-sans">
            <span>记者：{newspaper.headline.reporter}</span>
            <span>•</span>
            <span>{newspaper.headline.tag}</span>
          </div>

          <div className="columns-1 md:columns-2 gap-8 text-justify leading-relaxed text-lg">
            {renderTextWithClues(newspaper.headline.content)}
          </div>

          {newspaper.headline.image && (
            <div className="mt-8 border-t-2 border-neutral-800 pt-4">
              <h3 className="font-bold text-xl mb-2 font-sans uppercase">现场图片描述</h3>
              <div className="bg-neutral-200 h-48 flex items-center justify-center border border-neutral-400 mb-2 relative overflow-hidden grayscale">
                <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
                  <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20,20 L80,80 M80,20 L20,80" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <span className="absolute text-sm bg-white px-2 py-1">
                  {newspaper.headline.image.description}
                </span>
              </div>
            </div>
          )}
        </article>

        <aside className="md:col-span-4 flex flex-col gap-6">
          {newspaper.sidebar.map((section, idx) => (
            <div key={idx} className={
              section.type === 'advertisement' ? 'border-4 border-double border-neutral-800 p-4 text-center bg-neutral-100' :
              section.type === 'gossip' ? 'bg-neutral-800 text-neutral-100 p-4' :
              'border border-neutral-400 p-3'
            }>
              <h4 className={`font-bold mb-2 ${section.type === 'gossip' ? 'text-center border-b border-neutral-600 pb-2' : ''}`}>
                {section.title}
              </h4>
              {section.subtitle && <p className="text-sm mb-4">{section.subtitle}</p>}
              {section.content && renderTextWithClues(section.content)}
              {section.items && (
                <ul className="text-sm space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.text}
                      {item.clues && item.clues.map((clue, clueIdx) => (
                        <span
                          key={clueIdx}
                          className={`clue-span ${foundClues.includes(clue.id) ? 'found' : ''}`}
                          onClick={() => onClueClick(clue)}
                        >
                          {clue.text}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
      </div>

      {newspaper.bottomNews && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-neutral-800 pt-6">
          {newspaper.bottomNews.map((news, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-xl mb-2">{news.title}</h3>
              {renderTextWithClues(news.content)}
            </div>
          ))}
        </div>
      )}

      <footer className="mt-12 text-center text-xs text-neutral-500 border-t border-neutral-300 pt-4">
        © 1925 旧城纪事报社 | 印刷于第7街区印刷厂
      </footer>
    </main>
  )
}
