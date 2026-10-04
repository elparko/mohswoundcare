import { createContext, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SOURCES from '../content/sources';
import { LAST_REVIEWED, SITE_URL } from '../content/site';

const CiteContext = createContext(null);

export function Cite({ id }) {
  const order = useContext(CiteContext);
  if (!order) throw new Error('Cite used outside a page that lists sources');
  const ids = Array.isArray(id) ? id : [id];
  return (
    <span className="cite">
      {ids.map((sourceId) => {
        if (!SOURCES[sourceId]) throw new Error(`Unknown source "${sourceId}"`);
        if (!order.includes(sourceId)) order.push(sourceId);
        const n = order.indexOf(sourceId) + 1;
        return (
          <a key={sourceId} href={`#src-${sourceId}`} aria-label={`Source ${n}`}>
            [{n}]
          </a>
        );
      })}
    </span>
  );
}

function SourceList({ ids }) {
  if (ids.length === 0) return null;
  return (
    <section className="sources" aria-labelledby="sources-heading">
      <h2 id="sources-heading">Sources</h2>
      <ol>
        {ids.map((id) => {
          const source = SOURCES[id];
          return (
            <li key={id} id={`src-${id}`}>
              {source.cite}{' '}
              <a className="src-url" href={source.url} target="_blank" rel="noopener noreferrer">
                {source.url.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function Cited({ children }) {
  const order = [];
  return (
    <CiteContext.Provider value={order}>
      {children}
      <SourceList ids={order} />
    </CiteContext.Provider>
  );
}

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Mohs Wound Care` : 'Mohs Wound Care';
  }, [title]);
}

export default function Page({ title, eyebrow, lede, prev, next, children }) {
  useTitle(title);
  const order = [];
  return (
    <CiteContext.Provider value={order}>
      <article className="article">
        <p className="print-only">From {SITE_URL}</p>
        <header className="masthead">
          <span className="eyebrow">{eyebrow || 'Mohs wound care'}</span>
          <hr className="rule" />
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </header>
        <div className="page-meta">
          <span>Reviewed {LAST_REVIEWED}</span>
          <span className="spacer" />
          <button type="button" className="button" onClick={() => window.print()}>
            Print
          </button>
        </div>
        {children}
        <SourceList ids={order} />
        {(prev || next) && (
          <nav className="pager" aria-label="More pages">
            {prev && (
              <Link to={prev.to}>
                <span className="dir">← Previous</span>
                <span className="label">{prev.label}</span>
              </Link>
            )}
            {next && (
              <Link to={next.to} className="next">
                <span className="dir">Next →</span>
                <span className="label">{next.label}</span>
              </Link>
            )}
          </nav>
        )}
      </article>
    </CiteContext.Provider>
  );
}

export function Box({ kind = 'note', title, icon, children, headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;
  return (
    <div className={`box ${kind}`}>
      {title && (
        <Heading className="box-title">
          {icon}
          {title}
        </Heading>
      )}
      {children}
    </div>
  );
}
