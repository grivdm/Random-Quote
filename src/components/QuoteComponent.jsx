import React, { useState, useEffect } from "react";
import { GetQuote } from "./GetQuote";

const QuoteComponent = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [typedQuote, setTypedQuote] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    GetQuote().then((data) => {
      setQuote(data.content);
      setAuthor(data.author);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedQuote(quote.slice(0, typedQuote.length + 1));
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  }, [typedQuote, quote]);

  const handleNewQuote = () => {
    setShow(false);

    setTimeout(() => {
      setLoading(true);
      GetQuote().then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        setLoading(false);
        setShow(true); 
        setTypedQuote("");
      });
    }, 500);
  };

  return (
    <>
      <div  id="quote-box" className={`card bg-light ${show ? "fade-in" : "fade-out"}`}>
        <div className="card-body">
          <div >
            {!loading ? (
              <>
                <p id="text" className="quote card-text mb-2">
                  <i className="bi bi-quote"></i> {typedQuote}
                </p>
                <p id="author" className="author card-text text-muted text-end">- {author}</p>
              </>
            ) : (
              <p className="loading">loading...</p>
            )}
          </div>
          <div className="mt-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-2"
              id="tweet-quote"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <button id="new-quote" className="btn btn-secondary" onClick={handleNewQuote}>New quote</button>
          </div>
        </div>
        <div className="card-footer text-end footer">
        <p className="m-0">made with <i className="bi bi-heart-fill text-danger"></i> by <a href="https://github.com/grivdm">grivdm</a></p>
    </div>
      </div>
    </>
  );
};

export default QuoteComponent;
