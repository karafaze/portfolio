import React from "react";

export default function FormMessageInput(props) {
    const { message, handleChange, currentFormTopic } = props.data;

    const textareaLabel = {
        discussion: "What would you like to discuss or get insights about ?",
        joke: "Oh boy, give me a subject and i'll email you a nice one",
        work: "Detail me your project or let's settle a zoom meeting"
    };
    const textareaPlaceholder = {
        discussion: "Javascript, web development, frameworks...",
        joke: "Laughter are not guaranteed...",
        work: "Tech stack, team size, problems encountered...",

    }
    return (
        <div className="form--item">
            <label className="form--item__label" htmlFor="message">
                {textareaLabel[currentFormTopic] || 'Message'}
            </label>
            <textarea
                name="message"
                id="message"
                placeholder={textareaPlaceholder[currentFormTopic] || 'Write down your message here'}
                value={message}
                onChange={handleChange}
                className="form--item__textarea"
            />
        </div>
    );
}
