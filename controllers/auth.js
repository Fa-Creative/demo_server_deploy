export const createAccount = (req, res) => {
    try {
        res.status(200).json({ message: `I Detect an Account Creation Attemp` })
    } catch (error) {
        console.log(error)
    }
}