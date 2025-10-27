import React from "react";
import publications from "../data/publications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function Publications() {    
    
    function formatAuthors({ publication }) {
        return publication.authors.map((author, index) => {
            const formattedBold = index === publication.position ? (
                <span key={index} className="font-bold">{author}</span>
            ) : (
                author
            );

            const formatted = publication.equal.includes(author) ? (
                <>
                    {formattedBold}<sup className="text-md">*</sup>
                </>
            ) : (
                formattedBold
            )

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
        <>
            <ol className="list-decimal pl-4">
            {publications.map((publication, index) => (
                <li key={index} className="mb-8 pl-4">
                    {publication.title}. {formatAuthors({publication})}. {publication.conference} {publication.year}.
                    {publication.award === "medal" && (
                        <FontAwesomeIcon 
                            icon={faAward}
                            size="lg"
                            aria-hidden="true"
                        />)
                    }
                    {publication.award === "trophy" && (
                        <FontAwesomeIcon 
                            icon={faTrophy}
                            size="lg"
                            aria-hidden="true"
                        />)
                    }
                    {" "}<a className="text-blue-600 hover:text-blue-800 underline" href={publication.link}>[PDF]</a>
                </li>
            ))}
            </ol>
            <details>
                <ul>
                    <li>
                        * = Equal contribution
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faAward}
                            size="lg"
                        />
                        = Best Paper Honorable Mention
                    </li>
                </ul>
            </details>
        </>
    );
}