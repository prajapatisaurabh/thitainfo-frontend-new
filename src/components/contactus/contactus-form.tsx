"use client";
import { useState } from "react";
import Input from "../commons/Input";
import Textarea from "../commons/Textarea";
import { postData } from "@/utils/api";
// import toast from "react-hot-toast";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Simple validation for name, email, and description
    if (name === "email" && !/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(value)) {
      setErrors({ ...errors, email: "Invalid email" });
    } else if (name === "description" && value.length < 10) {
      setErrors({
        ...errors,
        description: "Description must be at least 10 characters long",
      });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({
      name: "",
      email: "",
      description: "",
    });

    try {
      await postData("/api/contactus", formData);
      // toast.success(result.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        // toast.error(error.message);
      } else {
        // toast.error("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled =
    Object.values(formData).some((value) => value === "") ||
    Object.values(errors).some((error) => error !== "");
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border rounded px-3 py-2 w-full"
        error={errors.name}
      />
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border rounded px-3 py-2 w-full"
        error={errors.email}
      />
      <Textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Write something here..."
        className="border rounded px-3 py-2 w-full"
        error={errors.description}
      />
      <button
        type="submit"
        className={`px-4 py-2 rounded ${
          isDisabled
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
        disabled={isDisabled}
      >
        {isLoading ? "Updaing" : "Submit"}
      </button>
    </form>
  );
}
