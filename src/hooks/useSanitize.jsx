import React from "react";

const useSanitize = ({data}) => {
    const sanitize = (value, type) => {
        switch(type) {
            case "active":
                return value ? "Yes" : "No"
            case "parent":
            case "role":
                const v = data.roles.filter(d => d._id === value)[0]?.name
                return v ? v : "N/A"
            case "permissions":
                return value.length
            default: 
                return value   
        }

        console.log(value, type)
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