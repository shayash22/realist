
export const welcome = (req,res) => {
    //using res.json(); we can send some data to the response to the client.
    res.json({
        data: "hello from nodejs api",
    });
};

export const preRegister = async (req, res) => {
    try {
        //
    } catch (err) {
        console.log(err)
        return res.json({error: 'Something went wrong try again.'});
    }
};