
export const welcome = (req,res) => {
    //using res.json(); we can send some data to the response to the client.
    res.json({
        data: "hello from nodejs api",
    });
}