
export const welcome = (req,res) => {
    //using res.json(); we can send some data to the response to the client.
    res.json({
        data: "hello from nodejs api. ",
    });
};

export const preRegister = async (req, res) => {
    //create jwt with email and password then email as clickable link.
    //only when user click on that email link, registeration completes.
    try {
        console.log(req.body);

        const emailSent = true;

        if(emailSent){
            return res.json({ok: true});
        }else{
            return res.json({ ok: false});
        }
    } catch (err) {
        console.log(err)
        return res.json({error: 'Something went wrong try again.'});
    }
};
