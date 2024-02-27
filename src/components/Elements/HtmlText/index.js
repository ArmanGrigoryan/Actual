import React from "react";

export default function HtmlText({ html }) {

    return html ?
        (
            <div>
                {
                    html.map(({ type, text, elementClass, hasHtml }, idx) => {
                        if (type === "paragraph") {
                            if (hasHtml) {
                                return <p 
                                    key={idx} 
                                    dangerouslySetInnerHTML={{ __html: text }}
                                    className={elementClass}
                                />
                            }

                            return <p key={idx} className={elementClass}>{ text }</p>
                        }
                        else if (type === "title") {
                            if (hasHtml) {
                                return <h2 
                                    key={idx} 
                                    dangerouslySetInnerHTML={{ __html: text }}
                                    className={elementClass}
                                />
                            }

                            return <h2 key={idx} className={elementClass}>{ text }</h2>
                        }
                        else if (type === "subtitle") {
                            if (hasHtml) {
                                return <h4 
                                    key={idx} 
                                    dangerouslySetInnerHTML={{ __html: text }}
                                    className={elementClass}
                                />
                            }

                            return <h4 key={idx} className={elementClass}>{ text }</h4>
                        }
                        else if (type === "hr") {
                            return <hr key={idx} />
                        }
                        else return null;
                })}
            </div> 
        ) :
        null
}