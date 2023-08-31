import React from "react";

const useSanitize = () => {
    const sanitize = value => {
        if(typeof value === "boolean") {
            return value ? "Yes" : "No"
        }
        if(Array.isArray(value)) {
            return value.length
        }
        return value
    }

    return {
        sanitize
    }
}

export default useSanitize