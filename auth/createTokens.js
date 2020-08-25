const { sign } = require("jsonwebtoken");

const createTokens = user => {
    const accessToken = sign(
        { userId: user.id, email: user.email },
        "somesupersecretkey",
        {
            expiresIn: 1
        }
    );

    const refreshToken = sign(
        { userId: user.id, email: user.email },
        "somesupersecretkey2",
        {
            expiresIn: 10
        }
    );
    return { refreshToken, accessToken }
}

module.exports = createTokens