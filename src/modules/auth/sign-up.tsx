import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { CityStateCountrySelect } from "./csc";
import axios from "../../api/axiosConfig";
import { toast } from 'react-toastify';
// Latest version - v3.0.0 with Tree Shaking to reduce bundle size

export function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    password: "",
    matchingPassword: "",
    email: "",
    country: "",
    state: "",
    city: "",
    mobile: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onMobileChange = (value: string | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      mobile: value || "",
    }));
  };
  const onSignUp = async () => {
    // Basic validation
    if (!formData.agreeToTerms) {
      toast.error("You must agree to the Terms and Conditions.");
      return;
    }

    if (formData.password !== formData.matchingPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("Please enter a password.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    // Validate phone number if provided
    if (formData.mobile && !isValidPhoneNumber(formData.mobile)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("api/v1/auth/sign-up", formData);
      
      if (response.status === 201) {
        toast.success("Registration successful! Redirecting to sign in...");
        
        // Reset form
        setFormData({
          fullName: "",
          businessName: "",
          password: "",
          matchingPassword: "",
          email: "",
          country: "",
          state: "",
          city: "",
          mobile: "",
          agreeToTerms: false,
        });

        // Redirect after success
        setTimeout(() => {
          window.location.href = "/sign-in";
        }, 2000);
      }
    } catch (error: any) {
      console.error('Sign-up error:', error);
      
      const apiMsg = error.response?.data?.message || 
                    error.response?.data?.error || 
                    "Registration failed. Please try again.";
      
      if (error.response?.status === 400) {
        toast.error(apiMsg || "Please check your input and try again.");
      } else if (error.response?.status === 409) {
        toast.error("An account with this email already exists.");
      } else if (error.response?.status >= 500) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error(apiMsg);
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
            className="mb-4 grid h-20 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              name="fullName"
              label="Your Name"
              size="lg"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
            />
            <Input
              name="businessName"
              label="Business Name"
              size="lg"
              value={formData.businessName}
              onChange={handleChange}
              autoComplete="organization"
            />
            <Input
              name="email"
              type="email"
              label="Email"
              size="lg"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              size="lg"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <Input
              name="matchingPassword"
              type={showPassword ? "text" : "password"}
              label="Confirm Password"
              size="lg"
              value={formData.matchingPassword}
              onChange={handleChange}
              autoComplete="off" // Best to disable for confirm password
            />
            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-sm text-blue-500 hover:underline mt-1"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>

            <div className="relative w-full min-w-[200px] h-11">
              <PhoneInput
                autoComplete="tel"
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500"
                defaultCountry="IN"
                value={formData.mobile}
                onChange={onMobileChange}
                error={
                  formData.mobile
                    ? isValidPhoneNumber(formData.mobile)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
                size="lg"
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                Mobile Number
              </label>
            </div>
            <CityStateCountrySelect functions={[formData, setFormData]} />
            <div className="-ml-2.5">
              <Checkbox
                label="I agree the Terms and Conditions"
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    agreeToTerms: e.target.checked,
                  }))
                }
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button 
              variant="gradient" 
              fullWidth 
              onClick={onSignUp}
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
