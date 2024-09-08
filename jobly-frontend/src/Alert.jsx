import React from "react";

/**
 * Component to display alerts in forms
 */
function Alert({type = "danger", messages = []}) {
    console.debug("Alert", "type=", type, "messages=", messages);

    return (
        <div role="alert">
            {messages.map(error => (
                <p key={error}>
                    {error}
                </p>
            ))}
        </div>
    )
}

export default Alert;