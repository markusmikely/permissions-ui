import moment from "moment";

const useSanitize = ({data}) => {
    const sanitize = (value, type) => {
        switch(type) {
            case "active":
                return value ? "Yes" : "No"
            case "parent":
            case "role":
                const v = data.roles ? data.roles.filter(d => d._id === value)[0]?.name : undefined
                return v ? v : "N/A"
            case "permissions":
                return value.length
            case "created":
                return moment(value).format("DD/MM/YYYY hh:mm a")
            default: 
                return value   
        }
    }

    return {
        sanitize
    }
}

export default useSanitize