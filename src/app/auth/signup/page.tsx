"use client";
import { Card } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";


const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const SignUpPag = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // const { mutate, isPending } = useSignUpMutation(AuthApiInstance);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // mutate(values);
  }

  return (
    <Card className="w-[90%] md:w-[65%] h-[75vh] md:h-[70vh] z-10 bg-background shadow-md flex flex-col gap-3 p-4 md:p-6 border border-brandblack/20 dark:border-fade/30 rounded-2xl">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-lg font-semibold">
          Sign Up to CryptoLuck
        </h1>
        {/* <p className="text-xs sm:text-sm font-medium text-muted-foreground">
          you have to wait for the account approval
        </p> */}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your full name"
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
              type="submit"
              className="w-full rounded-xl"
            >
              {isPending ? "Verifying" : "Sign Up"}
              {isPending && (
                <Loader2 className="size-5 shrink-0 ml-2 animate-spin" />
              )}
            </Button> */}
            <p className="text-sm font-medium text-muted-foreground text-center">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-blue-700 ml-1 hover:underline transition"
              >
                Log In
              </a>
            </p>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default SignUpPag;
