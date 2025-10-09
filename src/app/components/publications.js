import React from "react";
import publications from "../data/publications";

export default function Publications() {    
    
    function formatAuthors({ publication }) {
        return publication.authors.map((author, index) => {
            const formatted = index === publication.position ? (
                <span key={index} className="font-bold">
                {author}
                </span>
            ) : (
                author
            );

            // add comma except after last
            const separator = index < publication.authors.length - 1 ? ', ' : '';
            return (
                <React.Fragment key={index}>
                    {formatted}
                    {separator}
                </React.Fragment>
            );
        });
    }


    return (
        <ol className="list-decimal pl-4">
          {publications.map((publication, index) => (
            <li key={index} className="mb-8 pl-4">
                {publication.title}. {formatAuthors({publication})}. {publication.conference} {publication.year}. <a className="text-blue-600 hover:text-blue-800 underline" href={publication.link}>[PDF]</a>
            </li>
          ))}
        </ol>
    );
}