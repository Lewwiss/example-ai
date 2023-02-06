import { useState } from "react";

function Question({question, answer}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 w-full">
      <button className="w-full" onClick={() => setOpen(!open)}>
        <div className="w-full flex ">
          <div className="flex flex-grow">
            <h4 className="text-xl font-bold text-black text-left">{question}</h4>
          </div>
          <div className="text-neutral-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 duration-300 ${open ? "rotate-180" : null}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </button>
      { open ? <p className="text-lg text-neutral-500 leading-normal pt-2">{answer}</p> : null }
    </div>
  )
}

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <h2 className="h2 text-center pb-10 text-black">Questions and answers.</h2>
          <div className="flex flex-col items-start justify-center text-left space-y-8">

            <Question question="What is AI?" answer="AI, or artificial intelligence, refers to the ability of a machine or computer system to perform tasks that normally require human intelligence, such as learning, problem solving, and decision making. There are different types of AI, ranging from simple rule-based systems to more complex systems that can learn and adapt over time." />
            <hr className="border-neutral-300 w-full"/>
            <Question question="What are the benefits of using an AI article generator?" answer="AI article generators can produce articles quickly and at a lower cost than hiring a human writer, making them useful for meeting tight deadlines and producing large volumes of content. They can also offer consistency, personalization, and time-saving benefits." />
            <hr className="border-neutral-300 w-full"/>
            <Question question="How can an AI article generator be used in content marketing?" answer="To generate email newsletter content: An AI article generator can be used to produce content for email newsletters, such as summaries of recent articles or blog posts." />
            <hr className="border-neutral-300 w-full"/>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-black">Have more questions?</h4>
              <p className="text-lg pt-2 text-neutral-500">If you have any other questions, send us a message <a href="mailto:contact@stormai.co">contact@stormai.co</a> and we'll be happy to help!</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
