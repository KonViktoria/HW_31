console.log("hello")

axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        const users = response.data;
        console.log(users);
        users[2].name =null
        users.forEach((users) => {
            try {
                validateUser(users);
                console.log("User is valid:", users.name);
            } catch (error) {
                console.log("Validation error:", error.message);
            }
        });

    })
    .catch((error)=>{
        console.log("error");
})
function validateUser(user) {
    if (!user.name) {
        throw new Error("User name is missing");
    }

    if (!user.email) {
        throw new Error("User email is missing");
    }

    if (typeof user.id !== "number") {
        throw new Error("User id is not a number");
    }
}
