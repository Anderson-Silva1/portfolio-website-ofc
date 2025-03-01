"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contatos() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Mensagem enviada:", form);
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-32" id="contatos">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Entre em Contato
        </h1>
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Mail className="text-blue-500" />
            <span>anderson.developer360@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-green-500" />
            <span>+55 (85) 98972-8040</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-red-500" />
            <span>Fortaleza, CE</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-300 p-2 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-300 p-2 outline-none"
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            value={form.message}
            onChange={handleChange}
            required
            className="h-24 rounded-lg border border-gray-300 p-2 outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
