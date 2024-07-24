import { Response, response } from "express";
interface optionsInterface {
    expires: Date;
    httpOnly: boolean;
    secure?: boolean;
    }
const sendToken = (user: any,  accessToken:string,res:Response) => {
  try {
    const cookieExpiresStr = process.env.JWT_COOKIE_EXPIRE;
    const cookieExpires = cookieExpiresStr ? parseInt(cookieExpiresStr, 10) : 1;
    const token = user.getSignedJwtToken();
    const options:optionsInterface = {
      expires: new Date(Date.now() + cookieExpires * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure:true
    };
    if (process.env.NODE_ENV === "production") {
        options.secure = true;
    }
    res.status(200).cookie("token", token, options).json({
      success: true,
      token,
      email: user.email,
    });
  } catch (error) {
    console.log("error...jwtToken....", error);
    res.status(500).json(error);
  }
};

export default sendToken;
