"use client";
import { Card } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Loader2 } from "lucide-react";
import { PasswordInput } from "@/components/ui/password-input";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const LoginPag = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const { mutate, isPending } = useLoginMutation(AuthApiInstance)
  function onSubmit(values: z.infer<typeof formSchema>) {
    // mutate(values);
  }

  return (
    <Card className="w-[85%] md:w-[65%] h-[70 vh] md:h-[60vh] z-10 bg-background shadow-md flex flex-col gap-3 p-6 border border-brandblack/20 dark:border-fade/30 rounded-2xl">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-lg font-semibold">Sign in to CryptoLuck</h1>
        {/* <p className="text-xs sm:text-sm font-medium text-muted-foreground">
          valid credentials are provided by our team
        </p> */}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter email address"
                    className="rounded-xl"
                    {...field}
                  />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="enter your passwrd"
                    className="rounded-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col gap-4 items-center justify-center mt-3">
            {/* <Button
              disabled={isPending}
              type="submit" className="w-full rounded-xl">
              {isPending ? "Verifying" : "Log In"}
              {isPending && (
                <Loader2 className="size-5 shrink-0 ml-2 animate-spin" />
              )}
            </Button> */}
            <p className="text-sm font-medium text-muted-foreground text-center">
              Dont have an account?{" "}
              <a
                href="/auth/signup"
                className="text-blue-700 ml-1 hover:underline transition"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default LoginPag;
