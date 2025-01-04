import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CommentForm = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState<number>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: { [key: string]: unknown }) => {
    if (!rating) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }
    const formData = { ...data, rating };
    console.log(formData);
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      const messages = Object.values(errors);
      if (messages.length) {
        let firstMessage = "";
        if (messages[0]) {
          firstMessage = messages[0].message as string;
        }
        toast({
          title: firstMessage,
          variant: "destructive",
        });
      }
    }
  }, [Object.keys(errors).length]);

  return (
    <div>
      <h3 className="text-[#45595b] text-[2.4rem] font-[700] mb-5">
        Leave a Reply
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 mb-5">
          <Input
            type="text"
            placeholder="Name"
            className="w-full md:text-[1.6rem] py-7 block rounded-xl"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />

          <Input
            type="email"
            placeholder="Email"
            className="w-full md:text-[1.6rem] py-7 block rounded-xl"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </div>
        <Textarea
          placeholder="Your review"
          className="md:text-[1.6rem] h-[150px] mb-5 py-5 rounded-xl"
          {...register("message", {
            required: {
              value: true,
              message: "Message is required",
            },
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            Please review:
            {Array.from({ length: 5 }).map((_, index) => {
              const count = index + 1;
              return (
                <Star
                  key={count}
                  size={16}
                  className={clsx(
                    "cursor-pointer hover:fill-primaryColor",
                    count <= rating && "fill-primaryColor"
                  )}
                  onClick={() => {
                    setRating(count);
                  }}
                />
              );
            })}
          </div>

          <Button
            size={null}
            className={cn(
              "md:text-[1.6rem] px-10 py-6 text-primaryColor bg-white border-2 border-secondaryColor rounded-full",
              "hover:bg-secondaryColor hover:text-white"
            )}
          >
            Post Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
