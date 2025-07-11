import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography
} from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import axios from "../../api/axiosConfig";
import { Role } from "../../model/enums";
import { useAuth } from "../../context/AuthProvider";

export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginAPI = "api/v1/auth/sign-in";
  const formDataJSON = {
    usernameOrEmail: email,
    password: password
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrMsg("");

    try {
      const response = await axios.post(loginAPI, formDataJSON, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      
      const accessToken = response?.data?.token;
      if (!accessToken) {
        setErrMsg("Unable to login. Please try after some time.");
        return;
      }

      const roles: string[] = response?.data?.roles;
      const userData = response?.data?.user;
      
      // Create user object with proper typing
      const user = {
        id: userData?.id || '',
        email: userData?.email || email,
        fullName: userData?.fullName || userData?.name || '',
        roles: roles.map(role => role as Role),
        businessName: userData?.businessName || '',
        mobile: userData?.mobile || '',
        country: userData?.country || '',
        state: userData?.state || '',
        city: userData?.city || '',
      };

      // Use the auth context to sign in
      signIn(accessToken, user);
      
      // Navigate based on user role
      const isAgentLogin = roles.includes(Role.agent.toString());
      setTimeout(() => {
        isAgentLogin
          ? navigate("/dashboard/home")
          : navigate("/admin/dashboard");
      }, 500);
      
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          {errMsg && <h2>{errMsg}</h2>}
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              {/* <Select label="Select Role">
              <Option>Admin Login</Option>
              <Option>Agent Login</Option>
            </Select> */}
              <Input
                type="email"
                label="Email"
                size="lg"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <Button variant="gradient" fullWidth type="submit" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
