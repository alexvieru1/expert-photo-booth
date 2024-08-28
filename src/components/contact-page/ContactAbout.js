"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "../../../lib/api";
import { useToast } from "../ui/use-toast";

// Define the schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Numele complet trebuie să aibă cel puțin 2 caractere.",
  }),
  email: z.string().email({
    message: "Trebuie să introduceți un e-mail valid.",
  }),
  phoneNumber: z.string().regex(/^07\d{8}$/, {
    message: "Numărul de telefon trebuie să fie în formatul 07XXXXXXXX.",
  }),
  event: z.string().min(1, { message: "Trebuie să selectați un eveniment." }),
  message: z.string().min(10, {
    message: "Mesajul trebuie să aibă cel puțin 10 caractere.",
  }),
});

const ContactAbout = () => {
  const { toast } = useToast();
  // 1. Define your form using the useForm hook
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      event: "",
      message: "",
    },
  });

  // 2. Define a submit handler
  const onSubmit = async (values) => {
    try {
      await sendContactForm({
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        event: values.event,
        message: values.message,
      });
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Am primit mesajul tău și te vom contacta în curând.",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        variant: "destructive",
        title: "Eroare la trimiterea mesajului",
        description: "Încercați din nou mai târziu.",
      });
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full lg:max-w-[50%]">
        {/* Introductory Text */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-center">
            Hai să discutăm!
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Dacă ai întrebări sau dorești să discuți despre evenimentul tău, te
            rugăm să completezi formularul de mai jos sau să ne contactezi
            direct la numerele de telefon:
          </p>
          <p className="mt-4 text-center text-gray-600">
            <a
              href="tel:+40732406265"
              className="text-[#bb835e] hover:text-[#a6714d] font-semibold mx-4"
            >
              0732 406 265
            </a>{" "}
            sau{" "}
            <a
              href="tel:+40745310150"
              className="text-[#bb835e] hover:text-[#a6714d] font-semibold mx-4"
            >
              0745 310 150
            </a>
          </p>
        </motion.div>

        {/* Contact Form */}
        <Form {...form}>
          <motion.form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nume complet</FormLabel>
                  <FormControl>
                    <Input placeholder="Numele complet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nr. de telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="07XXXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Event */}
            <FormField
              control={form.control}
              name="event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Eveniment</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selectează evenimentul" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Nunta">Nuntă</SelectItem>
                        <SelectItem value="Botez">Botez</SelectItem>
                        <SelectItem value="Aniversare">Aniversare</SelectItem>
                        <SelectItem value="Corporate">
                          Eveniment Corporate
                        </SelectItem>
                        <SelectItem value="Alt tip eveniment">Altul</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mesaj</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Scrie mesajul tău aici..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Trimite
            </Button>
          </motion.form>
        </Form>
      </div>
    </motion.div>
  );
};

export default ContactAbout;
