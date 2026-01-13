import React from "react";
import courses from "../data/courses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export default function Teaching() {    
    
    function formatSemesters(course) {
        if (!course || !Array.isArray(course.semesters)) return null;
        return course.semesters.map((semester, index) => {
            const hasAward = Array.isArray(course.awards) && course.awards.includes(semester);
            const separator = index < course.semesters.length - 1 ? ', ' : '';

            return (
                <React.Fragment key={`${semester}-${index}`}>
                    {hasAward && (
                        <FontAwesomeIcon
                            icon={faAward}
                            className="pr-1"
                            aria-hidden="true"
                        />
                    )}
                    <span>{semester}</span>
                    {separator}
                </React.Fragment>
            );
        });
    }


    return (
        <>
            <ul className="list-disc pl-4">
                {courses.map((course, index) => (
                    <li key={index} className="mb-8 pl-4">
                        <span className="font-bold">{course.title}</span> (<span className="italic">{course.institution}</span>)
                        <ul className="list-[circle] pl-10">
                            <li>
                                {formatSemesters(course)}
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
            <details>
                <FontAwesomeIcon
                    icon={faAward}
                    size="lg"
                />
                = List of Teachers Ranked as Excellent by Their Students
            </details>
        </>
    );
}