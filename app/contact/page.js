import React from "react";
import ContactCard from "../components/ContactCard";
import Form from "../components/Form";
import { MdEmail, MdChat } from "react-icons/md";
import { HiChatAlt2 } from "react-icons/hi";

export default function page() {
  return (
    <main>
      <h1 className="text-3xl text-center font-semibold mt-4">Contact Us</h1>
      <section className="flex flex-wrap justify-evenly mb-8">
        <ContactCard
          icons=<MdEmail size={30} />
          title="Email"
          info_1="Monday to Friday Expected"
          info_2="response time: 72hrs"
          endLine="Send Email"
        />
        <ContactCard
          icons=<MdChat size={30} />
          title="Live Chat"
          info_1="Weekdays: 9 AM - 6 PM IST"
          info_2="Weekends: 9 AM - 5 PM IST"
          endLine="Chat Now"
        />
        <ContactCard
          icons=<HiChatAlt2 size={30} />
          title="Community Forum"
          info_1="Monday to Friday Expected"
          info_2="response time: 72hrs"
          endLine="Ask Us"
        />
      </section>
      <section>
        <h2 className="text-2xl font-bold text-center">
          We'd love to hear <span className="text-red-600">from You</span>
        </h2>
        <div className="flex justify-center mt-8">
          <Form />
        </div>
      </section>
      <section className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914114!2d75.56265937536055!3d26.843855176688322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1684178354739!5m2!1sen!2sin"
          width={600}
          height={450}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="min-w-full"
        ></iframe>
      </section>
    </main>
  );
}
