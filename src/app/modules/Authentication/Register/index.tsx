// Libraries
import React from "react";

// Component
// Style
// Types
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/app/components/ui/use-toast.ts";
import { useUserContext } from "@/store/AuthContext.tsx";
import { RegisterValidation } from "@/app/libs/validation.ts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form.tsx";
import { Input } from "@/app/components/ui/input.tsx";
import Loader from "@/app/components/atoms/Loader";
import { Button } from "@/app/components/ui/button.tsx";
import {
  useCreateUserAccount,
  useSignInAccount,
} from "@/app/queries/SnapGram/queries.ts";
import { ROUTES } from "@/constants/routes.ts";

const RegisterForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const form = useForm<z.infer<typeof RegisterValidation>>({
    resolver: zodResolver(RegisterValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // Queries
  const { mutateAsync: createUserAccount, isLoading: isCreatingAccount } =
    useCreateUserAccount();
  const { mutateAsync: signInAccount, isLoading: isSigningInUser } =
    useSignInAccount();

  // Handler
  const handleRegister = async (user: z.infer<typeof RegisterValidation>) => {
    try {
      const newUser = await createUserAccount(user);

      if (!newUser) {
        toast({ title: "Sign up failed. Please try again." });

        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        toast({ title: "Something went wrong. Please login your new account" });

        navigate(ROUTES.LOGIN.path);

        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();

        navigate("/");
      } else {
        toast({ title: "Login failed. Please try again." });

        return;
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <img src="/assets/images/logo.svg" alt="logo" />

            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
              Create a new account
            </h2>
            <p className="text-light-3 small-medium md:base-regular mt-2">
              To use snapgram, Please enter your details
            </p>

            <form
              onSubmit={form.handleSubmit(handleRegister)}
              className="flex flex-col gap-5 w-full mt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Name</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Username</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                {isCreatingAccount || isSigningInUser || isUserLoading ? (
                  <div className="flex-center gap-2">
                    <Loader /> Loading...
                  </div>
                ) : (
                  "Sign Up"
                )}
              </Button>

              <p className="text-small-regular text-light-2 text-center mt-2">
                Already have an account?
                <Link
                  to={ROUTES.LOGIN.path}
                  className="text-primary-500 text-small-semibold ml-1">
                  Log in
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

export default RegisterForm;
