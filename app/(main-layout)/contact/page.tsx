import PageTitle from "../_components/page-title/page-title";
import ContactForm from "./_components/contact-form";

const ContactPage = () => {
  return (
    <div className="w-full">
      <PageTitle pageName="Contact" />
      <div className="container my-20 w-full bg-slate-100 p-20 rounded-2xl flex flex-col gap-10">
        <div className=" text-center flex flex-col gap-3 items-center">
          <span className="text-6xl font-[500] text-primaryColor">
            Get in touch
          </span>
          <p className="max-w-[500px]">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and youre done.
          </p>
          <button className="text-primaryColor">Download Now.</button>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
