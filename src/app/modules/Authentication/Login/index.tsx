// Libraries
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form.tsx";
import { Input } from "@/app/components/ui/input.tsx";
import { Button } from "@/app/components/ui/button.tsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginValidation } from "@/app/libs/validation.ts";
import Loader from "@/app/components/atoms/Loader";
import { useSignInAccount } from "@/app/queries/SnapGram/queries.ts";
import { useUserContext } from "@/store/AuthContext.tsx";
import { useToast } from "@/app/components/ui/use-toast.ts";

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const Login: React.FC<Props> = (props) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  // Query
  const { mutateAsync: signInAccount, isLoading } = useSignInAccount();

  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (user: z.infer<typeof LoginValidation>) => {
    const session = await signInAccount(user);
    if (!session) {
      toast({ title: "Login failed. Please try again." });

      return;
    }

    const isLoggedIn = await checkAuthUser();
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      toast({ title: "Login failed. Please try again." });

      return;
    }
  };
  return (
    <>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <img src="/assets/images/logo.svg" alt="logo" />

            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
              Log in to your account
            </h2>
            <p className="text-light-3 small-medium md:base-regular mt-2">
              Welcome back! Please enter your details.
            </p>
            <form
              onSubmit={form.handleSubmit(handleSignin)}
              className="flex flex-col gap-5 w-full mt-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="shad-button_primary">
                {isLoading || isUserLoading ? (
                  <div className="flex-center gap-2">
                    <Loader /> Loading...
                  </div>
                ) : (
                  "Log in"
                )}
              </Button>

              <p className="text-small-regular text-light-2 text-center mt-2">
                Don&apos;t have an account?
                <Link
                  to="/register"
                  className="text-primary-500 text-small-semibold ml-1">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </Form>
      </section>

      <img
        src="/assets/images/side-img.svg"
        alt="logo"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
      />
    </>
  );
};

export default Login;
